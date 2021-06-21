import React, { useState, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { useOnClickOutside } from './hooks';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { Switch, Route } from "react-router-dom";

import Burger from './components/Burger/Burger';
import Menu from './components/Menu/Menu';
import WorksPage from './pages/WorksPage'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
// import PageNotFound from './components/PageNotFound/PageNotFound'
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';


function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  return (

    <Switch>
      {/* <Route exact path="/" component={Application} /> */}
      <Route exact path="/projects" component={WorksPage} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/contact" component={ContactPage} />
      {/* <Route component={PageNotFound} /> */}
    
      <ThemeProvider theme={theme}>
          <GlobalStyles />
          <div>
            <Hero />

          </div>
          <div ref={node}>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
          </div>
          <Footer />
      </ThemeProvider>
    </Switch>
  );
}
export default App;
