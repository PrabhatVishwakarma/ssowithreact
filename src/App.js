import React from "react";
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal, MsalProvider } from "@azure/msal-react";
import Navbar from "./Components/NavBar";
import LoginFileValidator from "./Components/LoginFileValidator/LoginFileValidator";
import styles from './App.module.css';

const WrappedView = () =>{
  const { instance } = useMsal();
  const activeAccount = instance.getActiveAccount();

  return (
    <div className={styles.App}>
    <Navbar />
    <AuthenticatedTemplate>
    {activeAccount ? (
      <h5>
      Welcome back {activeAccount.username}!
      </h5>
      ) :null}
    </AuthenticatedTemplate>
    <UnauthenticatedTemplate>
    <LoginFileValidator />
    </UnauthenticatedTemplate>
    </div>
  );
};

const App =  ({instance}) => {
  return (
    <MsalProvider instance = {instance}>
      <WrappedView/>
    </MsalProvider>
  );
};

export default App;