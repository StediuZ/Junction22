import React from 'react';
import { useEffect, useState } from "react";
import './App.css';

function App() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    var timerID = setInterval( () => tick(), 1000 );
    return function cleanup() {
        clearInterval(timerID);
    };
  });
  
  function tick() {
    setDate(new Date());
  }

  return (
    <div>
      <h1>Hello from Moodcast!</h1>
      <h1>It is {date.toLocaleTimeString()}.</h1>
    </div>
  );
}

export default App;