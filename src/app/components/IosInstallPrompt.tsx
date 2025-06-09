"use client";

import { useState, useEffect } from 'react';

const IosInstallPrompt = () => {
  const [isIos, setIsIos] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if the user is on an iOS device and not in standalone mode
    const isIosDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).navigator.standalone;
    setIsIos(isIosDevice);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isIos || !isVisible) {
    return null;
  }

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: '#333',
        color: 'white',
        padding: '15px 20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
      }}
    >
      <div>
        <p style={{ margin: 0, padding: 0 }}>
          To install this app on your device, tap the Share icon and then "Add to Home Screen".
        </p>
      </div>
      <button
        onClick={handleClose}
        style={{
          background: 'transparent',
          border: 'none',
          color: 'white',
          fontSize: '20px',
          cursor: 'pointer',
          padding: 0,
        }}
      >
        &times;
      </button>
    </div>
  );
};

export default IosInstallPrompt; 