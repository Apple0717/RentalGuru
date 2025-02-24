import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  const { worker } = await import('../src/server/browser');
  
  // Start the worker with specific options
  return worker.start({
    onUnhandledRequest: 'bypass', // Prevents console warnings for unhandled requests
    serviceWorker: {
      url: '/mockServiceWorker.js' // Specify the correct path
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