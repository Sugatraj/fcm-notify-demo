// API service for communicating with the backend

// Update this with your ngrok URL
const API_BASE_URL = 'YOUR_NGROK_URL';

/**
 * Register device token with backend
 * @param {string} token - FCM device token
 */
export const registerDevice = async (token) => {
  try {
    const response = await fetch(`${API_BASE_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token }),
    });

    if (!response.ok) {
      throw new Error('Failed to register device');
    }

    return await response.json();
  } catch (error) {
    console.error('Error registering device:', error);
    throw error;
  }
}; 