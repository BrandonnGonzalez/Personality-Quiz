import { useState } from 'react'
import './App.css'

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
  useEffect(() => { 

    const fetchArtImage = async () => {
      try {
        const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects
`);
        const data = await response.json();
        if(!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        setArtworkImage(data.primaryImageSmall);
      } catch (error) {
        console.error('Error fetching artwork image:', error);
      }
      }
      fetchArtImage();
  }, []); // Empty dependency array ensures it runs only once on mount
  // useEffect to determine the element and fetch the artwork image based on the answers
  useEffect(
    function () {
      if (currentQuestionIndex === questions.length) {
        const selectedElement = determineElement(answers);
        setElement(selectedElement);
        fetchArtwork(keywords[selectedElement]);
      }
    },
    [currentQuestionIndex]
  );


  return (
    <div>
      <UserContext.Provider value={{ name: userName, setName: handleUserFormSubmit }}>

      </UserContext.Provider>
    </div>
    
  );
}

export default App
