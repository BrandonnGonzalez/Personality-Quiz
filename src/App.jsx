import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Question from './components/Question'
import Results from './components/Results'
import UserForm from './components/UserForm'
import { UserContext } from './components/UserContext'

function App() {

  // All state declarations
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [userName, setUserName] = useState("");
  const [element, setElement] = useState("");
  //artworkImage is a variable created to hold the state for the artwork image of the MET Museum API. Change this variable name as needed.
  const [artwork, setArtwork] = useState(null);
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

  // All Handler Functions that will handle when changes occur like: click on an option, submitting the username, and  finishing the quiz.
  function handleAnswer(answer) {
    setAnswers([...answers, answer]);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };
  
  function handleUserFormSubmit(name) {
    setUserName(name);
  };
  
  function determineElement(answers) {
    const counts = {};
    answers.forEach(function(answer) {
      const element = elements[answer];
      counts[element] = (counts[element] || 0) + 1;
    });
    return Object.keys(counts).reduce(function(a, b) {
      return counts[a] > counts[b] ? a : b
    });
  };

  // API for fetching artwork image from the MET Museum API.
  async function fetchArtwork(keyword) {
    try {
      const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?q=${keyword}`);
      const data = await response.json();
      if(data.objectIDs && data.objectIDs.length > 0) {
        const objectResponse = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${data.objectIDs[0]}`);
        const objectData = await objectResponse.json();
        if(objectResponse.ok) {
          setArtwork({
            title: objectData.title,
            primaryImage: objectData.primaryImage || objectData.primaryImageSmall,
            artistDisplayName: objectData.artistDisplayName || 'Unknown',
            objectDate: objectData.objectDate || 'Unknown'
          });
        }
      }
    } catch (error) {
      console.error('Error fetching artwork:', error);
    }
  }
  
  // useEffect to determine the element and fetch the artwork image based on the answers
  useEffect(
    function () {
      if (currentQuestionIndex === questions.length && answers.length > 0) {
        const selectedElement = determineElement(answers);
        setElement(selectedElement);
        fetchArtwork(keywords[selectedElement]);
      }
    },
    [currentQuestionIndex, answers]
  );


  return (
    <BrowserRouter>
      <div>
        <UserContext.Provider value={{ name: userName, setName: setUserName }}>
          <Header />
          <Routes>
            <Route path="/" element={<UserForm onSubmit={handleUserFormSubmit} />} />
            <Route
              path="/quiz"
              element={
                currentQuestionIndex < questions.length ? (
                  <Question
                    question={questions[currentQuestionIndex].question}
                    options={questions[currentQuestionIndex].options}
                    onAnswer={handleAnswer}
                  />
                ) : (
                  <Results element={element} artwork={artwork} />
                )
              }
            />
          </Routes>
        </UserContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App
