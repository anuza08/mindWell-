/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import React, { useState, useEffect } from 'react';


import SplashScreen from './src/SplashScreen';


const EntryPoint = () => {
    const [showSplash, setShowSplash] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setShowSplash(false);
      }, 3000); // Show splash screen for 3 seconds
  
      return () => clearTimeout(timer); // Clean up the timer
    }, []);
  
    if (showSplash) {
      return <SplashScreen />;
    }
  
    return <App />; // Main app initialized after splash screen
  };
  
  AppRegistry.registerComponent(appName, () => EntryPoint);


