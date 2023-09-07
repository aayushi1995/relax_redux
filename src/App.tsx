
import { useState } from 'react';
// router
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
//components
import Dashboard from './Components/Dashboard/Dashboard'
import { ThemeProvider } from "styled-components";
import { MainContainer } from './Components/MainContainer/MainContainer';

import Login from './Components/Login/Login'
import Register from './Components/Register/Register'

import theme from './Theme/theme'
import './App.css';
import { FlexCenter } from './Components/commonStyles';

function App() {


  const [showLogin, setShowLogin] = useState(true)
  
  const handleToggle = (value:boolean) => {
    setShowLogin(value)
  }

  return (
    <ThemeProvider theme={theme}>
        <MainContainer>
          {/* Routing */}
          <BrowserRouter>
          <Routes>
            <Route path='*' element={
                <FlexCenter>
                {showLogin 
                ? <Login handleClose={() => handleToggle(false)}  handleLinkClick={() => handleToggle(false)} showClose/>
                : <Register handleClose={() => handleToggle(false)} handleLinkClick={() => handleToggle(true)} showClose/>
                }
                </FlexCenter>
              } />
              <Route path="/dashboard" element={<Dashboard />} />

          </Routes>
         </BrowserRouter>
        </MainContainer>
    </ThemeProvider>
  );
}

export default App;
