import React, { useEffect } from 'react';

const LandbotComponent = () => {
  useEffect(() => {
    const initLandbot = () => {
      if (window.Landbot) {
        window.Landbot.configure({
          configUrl: 'https://storage.googleapis.com/landbot.online/v3/your-config-id.json',
          // Add CORS headers
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type'
          }
        });
      }
    };

    // Load Landbot script
    const script = document.createElement('script');
    script.src = 'https://cdn.landbot.io/landbot-3/landbot-3.0.0.js';
    script.async = true;
    script.onload = initLandbot;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="landbot-container"></div>;
};

export default LandbotComponent; 