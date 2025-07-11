/**
 * @name Hotel Room Booking System
 * @author Garvit
 * @description Hotel Room Booking and Management System Software ~ Developed By Garvit
 * @copyright ©2025 ― Garvit. All rights reserved.
 * @version v0.0.1
 *
 */

import { useEffect, useState } from 'react';

function useFullScreen() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  // watch for fullscreen change
  useEffect(() => {
    function onFullscreenChange() {
      setIsFullscreen(Boolean(document.fullscreenElement));
    }

    document.addEventListener('fullscreenchange', onFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', onFullscreenChange);
  }, []);

  // function to handle exit or enter full screen
  const toggleFullScreen = () => {
    if (isFullscreen) {
      document.exitFullscreen();
    } else {
      document.body.requestFullscreen();
    }
  };

  return { isFullscreen, toggleFullScreen };
}

export default useFullScreen;
