import { useState } from 'react'
import './App.css'

function App() {

  // All state declarations
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [userName, setUserName] = useState("");
  const [element, setElement] = useState("");
  const [artworkImage, setArtworkImage] = useState(null);
  // All variable declarations
  const questions = [
    {
      question: "What's your favorite color?",
      options: ["Red 🔴", "Blue 🔵", "Green 🟢", "Yellow 🟡"],
    },
  ];
  const keywords = {
    Fire: "fire",
    Water: "water",
    Earth: "earth",
    Air: "air",
  };
  const elements = {
    "Red 🔴": "Fire",
    "Blue 🔵": "Water",
    "Green 🟢": "Earth",
    "Yellow 🟡": "Air",
  };

  return (
    <h1>Hello World</h1>
    
  );
}

export default App
