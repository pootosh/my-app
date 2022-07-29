import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';

// import { BrowserRouter as Router } from "react-router-dom";
// import { Routes, Route  } from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);


  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      showAlert('Dark mode Activated', 'success');
      document.body.style.backgroundColor = 'black';
    }
    else{
      setMode('light');
      showAlert('Light mode Ativated', 'success');
      document.body.style.backgroundColor = 'white';
    }
  }

  const showAlert = (mesage, type) =>{
    setAlert({
      msg:mesage,
      type:type
    });

    setTimeout(() => setAlert(null), 1500)
  }

  return (
    
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <TextForm title="Enter text analyze" mode={mode} showAlert={showAlert}/>
    
    {/* <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
    <Routes>
      <Route exact path="/" element={<TextForm title="Enter text analyze" mode={mode} showAlert={showAlert}/>} />
      <Route exact path="/about" element={<About />} />
        
      
    </Routes>
    </Router> */}
      
      
      
      
      
      
      
    </>
     
      
    
  );
}

export default App;
