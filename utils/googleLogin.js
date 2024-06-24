import axios from 'axios';

export const initiateGoogleAuth = async () => {
  try {
    const response = await axios.get('http://srv417723.hstgr.cloud:3001/api/user/auth/google', {
      withCredentials: true,
      maxRedirects: 0 
    });
    console.log(response);
  } catch (error) {
    if (error.response && error.response.status === 302) {
      window.location.href = error.response.headers.location;
    } else {
      console.error('Error initiating Google authentication', error);
    }
  }
};


export const checkauth = async () => {
  try {
    const response = await axios.get('http://srv417723.hstgr.cloud:3001/api/user/check-authentication', { withCredentials: true });
    console.log('Success:', response.data);
    return response.data; 
  } catch (error) {
    console.error('Error fetching data:', error);
    return null; 
  }
}
