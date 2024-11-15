import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { PrivyProvider } from '@privy-io/react-auth';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <PrivyProvider
        appId="cm3hh4seg003doz8rt0y0kt4i"
        config={{
          // Display email and wallet as login methods
          loginMethods: ['sms'],
          // Customize Privy's appearance in your app
          appearance: {
            theme: 'light',
            accentColor: '#676FFF',
            logo: 'https://i.imgur.com/ZZc9r4L.png',
          },
          // Create embedded wallets for users who don't have a wallet
          embeddedWallets: {
            showWalletUIs: true,
            createOnLogin: "all-users",
          },
        }}
      >
        <App />
      </PrivyProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
