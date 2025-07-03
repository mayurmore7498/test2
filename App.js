import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import BasicExample from './components/Navbar';
import TextForm from './components/TextForm';
import CustomAlert from './components/CustomAlert';
import About from './components/About';

function App() {
  const [mode, setMode] = useState('dark');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => setAlert(null), 2000); 
  };

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    } else {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
  };

  return (
    <Router>
      <BasicExample title="mayur" mode={mode} toggleMode={toggleMode} />
      <CustomAlert alert={alert} />

      <div className="container my-3">
        <Routes>
          <Route path="/" element={<TextForm mode={mode} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
