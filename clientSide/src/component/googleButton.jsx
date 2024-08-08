import { useEffect } from 'react';
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import MenusData from '../helper/instance';

function GoogleButton() {

    const navigate = useNavigate()

  useEffect(() => {
    window.google.accounts.id.initialize({
      // fill this with your own client ID
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      // callback function to handle the response
      callback: async (response) => {
        console.log("Encoded JWT ID token: " + response.credential)
        const { data } = await MenusData('/login/google', {
          googleToken: response.credential,
        });

        localStorage.setItem("accessToken", data.access_token);

        navigate("/menu") 
      },
    });
    window.google.accounts.id.renderButton(
      // HTML element ID where the button will be rendered
      // this should be existed in the DOM
      document.getElementById('buttonDiv'),
      // customization attributes
      { theme: 'outline', size: 'large' },
    );
    // to display the One Tap dialog, or comment to remove the dialog
    window.google.accounts.id.prompt();
  }, []);

  return <div id="buttonDiv"></div>;
}

export default GoogleButton;