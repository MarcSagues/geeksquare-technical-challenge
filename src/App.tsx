import { useState } from 'react';
import reactLogo from './assets/react.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Pokemon from './pages/Pokemon/Pokemon';
import Navbar from './layout/Navbar';
import { ThemeProvider } from 'styled-components';
import theme from './theme/theme';
import { AppContainerDiv } from './styles/App.styles.d';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AppContainerDiv>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="pokemon/:id" element={<Pokemon />} />
          </Routes>
        </AppContainerDiv>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
