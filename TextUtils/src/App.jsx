
import './App.css'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
//import About from './components/About'
import React, { useState } from 'react';


function App() {
  const [mode, setMode]=useState('light');
  const toggleMode = () =>
  {
    if(mode === 'light'){
      setMode('dark');
    }
    else
    {
      setMode('light');
    }
  }

  return (
    <>
      <Navbar title=" Textutilies" about="about Textutlies" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
      <TextForm heading="enter the text anyalizing below" />
      {/*<About/>*/}
      </div>
     
    </>
  )
}

export default App
