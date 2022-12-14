import React from 'react';
import axios from 'axios';
import { useEffect, useState } from "react";
import './App.css';
import UnstyledInputBasic from './components/Input.js';

function App() {
  const [view, setView] = useState("gm")
  const [name, setName] = useState("Alex")
  const [text, setText] = useState("")
  const [feedback, setFeedback] = useState("")

  const questions = [
    "Did you sleep well?",
    "Are you feeling stressed?",
    "Do you have a lot of worries?",
    "Are you feeling energized?",
    "Have you had fun today?",
    "How are you feeling today?",
    "Do you feel tired often?",
    "Are you relaxed?",
    "What is important to you?",
  ]
  const [question, setQuestion] = useState(questions[Math.floor(Math.random() * questions.length)])

  function handleTextChange(value) {
    setText(value);
  }

  function onSubmitGM(e) {
    e.preventDefault();
    setText("");
    setView("question");
  }
  
  function onSubmitQuestion(e) {
    e.preventDefault();
    axios.post(`https://moodkast.fly.dev/api/mood`, { question: question, answer: text})
    .then(function (response) {
      setFeedback(response.data.feedback);
      setQuestion(questions[Math.floor(Math.random() * questions.length)]);
      setText("");
      e.target.value = "";
    })
    .catch(function (error) {
      console.log(error);
    });
    }

  if (view=="gm"){
    return (
      <div className="fill-window">
        <p className="fix-stroke" id="gm">Good morning, {name}.</p>
        <form onSubmit={onSubmitGM}>
          <UnstyledInputBasic value={text} 
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
            <UnstyledInputBasic value={text} 
              onChange={(e) => {
                handleTextChange(e.target.value);
              }}
            ></UnstyledInputBasic>
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