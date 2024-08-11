import React, { useEffect, useState } from 'react';
import FlashcardCarousel from './FlashcardCarousel';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Dashboard from './Dashboard';
import Navbar from './Navbar';

function App() {
  const [questions,setQuestions] = useState([{id:1,question:"How are you?",answer:"I'm fine"}]);
  useEffect(()=>{
    const fetchData = async ()=>{
      const response = await axios.get('http://localhost:3000/questions');
      setQuestions(response.data);
    }
    fetchData();
  },[])
  return (
    <Router>

    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/' element={<FlashcardCarousel questions={questions}/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
