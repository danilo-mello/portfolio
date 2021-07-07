import React, { useState, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { useOnClickOutside } from './hooks';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { Switch, Route } from "react-router-dom";

import Burger from './components/Burger/Burger';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Projects from './components/Works/Projects';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import ResumePage from './pages/ResumePage';

function App() {

  const [open, setOpen] = useState(false);
  const node = useRef();

  useOnClickOutside(node, () => setOpen(false));

  return (

    <Switch>

      <Route exact path="/resume" component={ResumePage} />

      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <div>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </div>
        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
        <Footer />
      </ThemeProvider>

    </Switch>
  )
}

export default App;