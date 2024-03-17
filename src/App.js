import { useState } from 'react';
import About from './Components/About';
import Form from './Components/Form';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(2 23 57)';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  };

  return (
    <>
    <BrowserRouter>
      <Navbar tittle="Text Util" menu1="Home" menu2="About us" mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route exact path='/' element={<Form heading="Text Transformation Wizard: Empower Your Words!" mode={mode} />} />
          <Route exact path="/about" element={<About mode={mode} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
