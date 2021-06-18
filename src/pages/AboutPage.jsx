import React, { useState, useRef } from 'react';
import { ThemeProvider } from 'styled-components';

import { useOnClickOutside } from '../hooks';
import { GlobalStyles } from '../global';
import { theme } from '../theme';

import Burger from '../components/Burger/Burger';
import Menu from '../components/Menu/Menu';
import About from '../components/About/About'
// import PageNotFound from '../components/PageNotFound/PageNotFound'
// import Footer from '../components/Footer/Footer';

const AboutPage = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
      <ThemeProvider theme={theme}>
          <GlobalStyles />
          <div>
            <About />
          </div>
          <div ref={node}>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
          </div>
      </ThemeProvider>
  );
}
export default AboutPage;
