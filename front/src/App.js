import React from 'react';
import axios from 'axios';
import { useEffect, useState } from "react";
import './App.css';
import UnstyledInputBasic from './components/Input.js';

function App() {
  const [date, setDate] = useState(new Date());
  const [view, setView] = useState("gm")
  const [name, setName] = useState("Alex")
  const [text, setText] = useState("")
  const [question, setQuestion] = useState("Did you sleep well?")
  const [feedback, setFeedback] = useState("")


  const [message, setMessage] = useState('hehe');

  function handleTextChange(value) {
    setText(value);
    console.log(value);
  }

  function onSubmitGM(e) {
    e.preventDefault();
    setView("question")
    console.log(e);
  }
  
  function onSubmitQuestion(e) {
    e.preventDefault();
    axios.post(`localhost:5000/api/mood?question=${question}&answer=${text}`)
  .then(function (response) {
    setFeedback(response.feedback);
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
    console.log(e);
  }

  useEffect(() => {
    var timerID = setInterval( () => tick(), 1000 );
    return function cleanup() {
        clearInterval(timerID);
    };
  });
  
  function tick() {
    setDate(new Date());
  }

  if (view=="gm"){
    return (
      <div className="fill-window">
        <p className="fix-stroke" id="gm">Good morning, {name}.</p>
        <form onSubmit={onSubmitGM}>
        <UnstyledInputBasic value={message} 
        onChange={(e) => {
          handleTextChange(e.target.value);
      }}></UnstyledInputBasic>
      </form>
      </div>
    );
  }

  else if (view=="dashboard"){
    return (
      <div className="fill-window">
        <h1>this is the dashboard</h1>
      </div>
    );
  }

  else if (view=="question"){
    return (
      <div className="fill-window">
        <div className="questionBox">
          <p className="question">{question}</p>
          <form onSubmit={onSubmitQuestion}>
        <UnstyledInputBasic value={message} 
        onChange={(e) => {
          handleTextChange(e.target.value);
      }}></UnstyledInputBasic>
      </form>
      {feedback != "" &&
      <p className="feedback">{feedback}</p>
  }
        </div>
      </div>
    );
  }
  
  else {
    return(
      <div>
        <p>404</p>
      </div>
    )
  }
}

export default App;