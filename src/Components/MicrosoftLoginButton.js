import React, { useState } from "react";
import { loginRequest } from "../../src/authConfig";
import { useEffect } from 'react';
import { useMsal } from '@azure/msal-react';

const MicrosoftLoginButton = () => {
  const [instance, setInstance] = useState(null);
  const { instance: msalInstance } = useMsal();

  useEffect(() => {
    setInstance(msalInstance);
}, [msalInstance]);

  const SsoLogin = () => {
    if (instance) {
      instance.loginRedirect({
        ...loginRequest,
        prompt: 'create',
      })
      .catch((error) => console.log(error));
    }
  };

  return (
    <button className="sso-button" onClick={SsoLogin}>
      <img src="https://upload.wikimedia.org/wikipedia/en/0/0a/Persistent_Systems.png" alt="SSO Button" className="sso-button-icon" />
      <span className="sso-button-text">Company Single Sign-On</span>
    </button>
  );
};

export default MicrosoftLoginButton;