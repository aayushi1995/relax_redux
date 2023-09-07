
import { useState } from 'react';
import Dashboard from './Components/Dashboard/Dashboard'
import { ThemeProvider } from "styled-components";
import { MainContainer } from './Components/MainContainer/MainContainer';
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'

import theme from './Theme/theme'
import './App.css';

function App() {

  const [showLogin, setShowLogin] = useState(true)
  
  const handleToggle = (value:boolean) => {
    setShowLogin(value)
  }

  return (
    <ThemeProvider theme={theme}>
        <MainContainer>
          <Dashboard/>
          {/* {showLogin ? <Login handleClose={() => handleToggle(false)}  handleLinkClick={() => handleToggle(false)} showClose/>
          : <Register handleClose={() => handleToggle(false)} handleLinkClick={() => handleToggle(true)} showClose/>} */}
        </MainContainer>
    </ThemeProvider>
  );
}

export default App;
