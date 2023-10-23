import React, { useEffect, useState } from 'react';

const SplineViewer = () => {
  const [error, setError] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@splinetool/viewer/build/spline-viewer.js';
    script.type = 'module';
    document.body.appendChild(script);

    script.onerror = () => {
      setError(true);
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const handleSplineEvent = (event) => {
      console.log('Spline event received:', event.detail);
      // Handle the event here
    };

    const viewer = document.querySelector('spline-viewer');
    viewer.addEventListener('spline-event', handleSplineEvent);

    return () => {
      viewer.removeEventListener('spline-event', handleSplineEvent);
    };
  }, []);

  return (
    <div className="spline-viewer-container">
          <h2>Error 404</h2>
          <h2>Page not found</h2>
          <spline-viewer url="https://prod.spline.design/PBQQBw8bfXDhBo7w/scene.splinecode" events-target="global"></spline-viewer>
    </div>
  );
};

export default SplineViewer;
