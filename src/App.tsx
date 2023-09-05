import Dashboard from './Components/Dashboard/Dashboard'
import { ThemeProvider } from "styled-components";
import { MainContainer } from './Components/MainContainer/MainContainer';
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'

import theme from './Theme/theme'
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
        <MainContainer>
          {/* <Dashboard/> */}
          {/* <Login/> */}
          <Register/>
        </MainContainer>
    </ThemeProvider>
  );
}

export default App;
