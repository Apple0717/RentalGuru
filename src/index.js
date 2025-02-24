import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  const { worker } = await import('../src/server/browser');

  return worker.start({
    onUnhandledRequest: 'bypass', 
    serviceWorker: {
      url: '/mockServiceWorker.js' 
    }
  });
}

enableMocking().then(() => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
});