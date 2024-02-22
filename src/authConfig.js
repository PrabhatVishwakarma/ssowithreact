import { LogLevel } from '@azure/msal-browser';

export const msalConfig = {
    auth: {
        tenantId: "cf754f70-d2a6-41f9-9ea7-d8b8b0cdb3f5", 
        clientId: "a50bb145-fa58-4ccf-a5e8-0bb907d8cb04",
        authority: "https://login.microsoftonline.com/cf754f70-d2a6-41f9-9ea7-d8b8b0cdb3f5", 
        redirectUri: "http://localhost:3000/",
        postLogoutRedirectUri: "/",
        navigateToLoginRequestUrl: false, 
      },
    cache: {
        cacheLocation: 'sessionStorage',
        storeAuthStateInCookie: false,
    },
    system: {
        loggerOptions: {
            loggerCallback: (level, message, containsPii) => {
                if (containsPii) {
                    return;
                }
                switch (level) {
                    case LogLevel.Error:
                        console.error(message);
                        return;
                    case LogLevel.Info:
                        console.info(message);
                        return;
                    case LogLevel.Verbose:
                        console.debug(message);
                        return;
                    case LogLevel.Warning:
                        console.warn(message);
                        return;
                    default:
                        return;
                }
            },
        },
    },
};

export const loginRequest = {
    scopes: ['user.read'],
};