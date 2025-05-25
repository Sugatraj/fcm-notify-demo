from flask import Flask, request, jsonify
from flask_cors import CORS
from firebase_admin import credentials, messaging, initialize_app
import os
from config import Config

app = Flask(__name__)
CORS(app)
app.config.from_object(Config)

# Initialize Firebase Admin SDK
try:
    cred = credentials.Certificate(app.config['FIREBASE_CREDENTIALS_PATH'])
    firebase_app = initialize_app(cred)
except Exception as e:
    print(f"Firebase initialization error: {e}")

@app.route('/register-token', methods=['POST'])
def register_token():
    try:
        data = request.get_json()
        token = data.get('token')
        
        if not token:
            return jsonify({'error': 'No token provided'}), 400
            
        # Here you would typically store the token in a database
        # For demo purposes, we'll just return success
        return jsonify({'message': 'Token registered successfully'}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/send-notification', methods=['POST'])
def send_notification():
    try:
        data = request.get_json()
        token = data.get('token')
        title = data.get('title', 'Default Title')
        body = data.get('body', 'Default Message')
        
        if not token:
            return jsonify({'error': 'No token provided'}), 400
            
        message = messaging.Message(
            notification=messaging.Notification(
                title=title,
                body=body,
            ),
            token=token,
        )
        
        response = messaging.send(message)
        return jsonify({
            'message': 'Notification sent successfully',
            'fcm_message_id': response
        }), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/health', methods=['GET'])
def health_check():
    return jsonify({'status': 'healthy'}), 200

if __name__ == '__main__':
    app.run(
        host=app.config['HOST'],
        port=app.config['PORT'],
        debug=app.config['DEBUG']
    ) 