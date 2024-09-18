import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, { useEffect } from 'react';


function App() {
  
  const [count, setCount] = useState(0)
  useEffect(() => {
    // This code runs once when the component mounts
    console.log('Component mounted');

    // Return a cleanup function
    return () => {
        // This code runs when the component unmounts
        console.log('Component will unmount');
    };
}, []); // Empty dependency array

return <div>My hello wokd </div>;
}
  


export default App
