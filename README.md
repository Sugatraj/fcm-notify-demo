# FCM Notification Demo

A complete demo system showcasing Firebase Cloud Messaging (FCM) push notifications with FastAPI backend and Expo React Native mobile app.

## 🎯 Project Overview

This project demonstrates:
- FastAPI backend for managing FCM tokens and sending notifications
- Expo React Native mobile app that receives notifications (foreground/background/locked)
- Custom sound playback with notifications
- Notification logging interface
- Optional dashboard for sending test notifications

## 📁 Project Structure

```
fcm-notify-demo/
├── backend/
│   ├── main.py               # FastAPI server
│   ├── device_tokens.json    # Token storage
│   ├── .env                  # Environment config
│   └── requirements.txt      # Python dependencies
│
├── mobile/
│   ├── App.js               # Expo entry point
│   ├── screens/
│   │   └── NotificationLog.js
│   └── services/
│       └── api.js           # API integration
│
└── dashboard/ (optional)
    └── index.html           # Simple notification trigger UI
```

## 🚀 Setup Instructions

### Backend Setup

1. Create and activate a Python virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install dependencies:
```bash
cd backend
pip install -r requirements.txt
```

3. Configure environment:
- Copy `.env.example` to `.env`
- Add your Firebase Server Key to `.env`

4. Run the server:
```bash
uvicorn main:app --reload
```

5. Expose locally via ngrok:
```bash
ngrok http 8000
```

### Mobile App Setup

1. Install dependencies:
```bash
cd mobile
npm install
```

2. Configure Firebase:
- Add your Firebase config in `app.json`
- Update API endpoint in `services/api.js` with your ngrok URL

3. Start the app:
```bash
npx expo start
```

## 📱 Features

- Token Registration: App automatically registers FCM token with backend
- Push Notifications: Receive notifications in any app state
- Custom Sounds: Play different sounds based on notification type
- Notification Log: View history of received notifications
- Dashboard: Optional web UI to trigger test notifications

## 🔧 API Endpoints

### Register Device Token
```http
POST /register
{
    "token": "fcm_device_token"
}
```

### Send Notification
```http
POST /notify
{
    "title": "Notification Title",
    "body": "Notification Message",
    "sound": "sound_file.wav"  // Optional
}
```

## 📝 Testing

Test scenarios to verify:
1. Notification reception in foreground
2. Background notification handling
3. Locked screen notifications
4. Custom sound playback
5. Notification logging

## 🛠️ Tech Stack

- Backend: FastAPI + Python
- Mobile: Expo + React Native
- Push Notifications: Firebase Cloud Messaging (FCM)
- Extras: ngrok (local tunnel)

## 📄 License

MIT License - feel free to use this demo for learning and development!
