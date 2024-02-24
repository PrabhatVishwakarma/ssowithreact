import React from "react";
import { AuthenticatedTemplate, UnauthenticatedTemplate,  MsalProvider } from "@azure/msal-react";
import Navbar from "./Components/NavBar";
import LoginFileValidator from "./Components/LoginFileValidator/LoginFileValidator";
import './App.css';
import FileUpload from "./Components/FileUpload/FileUpload";

const WrappedView = () => {
 

  return (
    <div className="App">
      <Navbar />
      <AuthenticatedTemplate>
        <FileUpload />
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <LoginFileValidator />
      </UnauthenticatedTemplate>
      <div className="footer-copyright">
        Copyright by 8-Bit Coders
      </div>
    </div>
  );
};

const App = ({ instance }) => {
  return (
    <MsalProvider instance={instance}>
      <WrappedView />
    </MsalProvider>
  );
};

export default App;