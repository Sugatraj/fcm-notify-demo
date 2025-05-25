import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

class Config:
    # Flask settings
    FLASK_APP = 'app.py'
    FLASK_ENV = 'development'
    DEBUG = True
    
    # Firebase settings
    FIREBASE_CREDENTIALS_PATH = os.getenv('FIREBASE_CREDENTIALS_PATH', 'firebase-credentials.json')
    
    # Server settings
    HOST = '0.0.0.0'
    PORT = 5000 