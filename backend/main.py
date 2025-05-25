from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import Optional
import json
import os
import requests
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Initialize FastAPI app
app = FastAPI(title="FCM Notification Demo")

# Constants
DEVICE_TOKENS_FILE = "device_tokens.json"
FCM_SERVER_KEY = os.getenv("FCM_SERVER_KEY")
FCM_API_URL = "https://fcm.googleapis.com/fcm/send"

if not FCM_SERVER_KEY:
    raise ValueError("FCM_SERVER_KEY environment variable is not set")

# Models
class DeviceToken(BaseModel):
    token: str

class Notification(BaseModel):
    title: str
    body: str
    sound: Optional[str] = None

# Helper functions
def load_device_tokens():
    try:
        with open(DEVICE_TOKENS_FILE, 'r') as f:
            return json.load(f)
    except FileNotFoundError:
        return []

def save_device_tokens(tokens):
    with open(DEVICE_TOKENS_FILE, 'w') as f:
        json.dump(tokens, f)

# API endpoints
@app.post("/register")
async def register_device(device: DeviceToken):
    """Register a new device token for FCM notifications"""
    tokens = load_device_tokens()
    
    if device.token not in tokens:
        tokens.append(device.token)
        save_device_tokens(tokens)
    
    return {"message": "Device registered successfully"}

@app.post("/notify")
async def send_notification(notification: Notification):
    """Send FCM notification to all registered devices"""
    tokens = load_device_tokens()
    
    if not tokens:
        raise HTTPException(status_code=404, detail="No devices registered")

    # Prepare FCM payload
    headers = {
        "Authorization": f"key={FCM_SERVER_KEY}",
        "Content-Type": "application/json"
    }
    
    payload = {
        "registration_ids": tokens,
        "notification": {
            "title": notification.title,
            "body": notification.body,
        },
        "data": {
            "sound": notification.sound if notification.sound else "default"
        }
    }

    # Send to FCM
    try:
        response = requests.post(FCM_API_URL, json=payload, headers=headers)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/devices")
async def get_registered_devices():
    """Get list of registered device tokens"""
    tokens = load_device_tokens()
    return {"devices": tokens, "count": len(tokens)}

# Health check endpoint
@app.get("/health")
async def health_check():
    """Health check endpoint"""
    return {"status": "healthy"} 