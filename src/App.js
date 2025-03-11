import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthenticatedTemplate, UnauthenticatedTemplate, MsalProvider } from "@azure/msal-react";
import Navbar from "./Components/NavBar";
import AiChatBotLoginPage from "./Components/AiChatBotLoginPage/AiChatBotLoginPage";
import RegisterPage from "./Components/Register/AiChatBotUserRegister"; // Import RegisterPage
import "./App.css";

const WrappedView = () => {
  return (
    <div className="App">
      <AuthenticatedTemplate>
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <AiChatBotLoginPage />
      </UnauthenticatedTemplate>
      <div className="footer-copyright">
        Copyright by Spartans Code Ninjas
      </div>
    </div>
  );
};

const App = ({ instance }) => {
  return (
    <MsalProvider instance={instance}>
      <Router>
        <Navbar />  {}
        <Routes>
          <Route path="/" element={<WrappedView />} />
          <Route path="/login" element={<AiChatBotLoginPage />} />

          <Route path="/register" element={<RegisterPage />} /> {}
        </Routes>
      </Router>
    </MsalProvider>
  );
};

export default App;
