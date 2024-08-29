import React from 'react'
import { useState, useDebugValue } from 'react';

const UseDebug = () => {
    const [isOnline, setIsOnline] = useState(true);

    // Here’s where we use `useDebugValue` to add a label
    useDebugValue(isOnline ? 'Online' : 'Offline');
  
    return [isOnline, setIsOnline];
  }

export default UseDebug