import React, { useState, useRef } from 'react';
import { ThemeProvider } from 'styled-components';

import { useOnClickOutside } from '../hooks';
import { GlobalStyles } from '../global';
import { theme } from '../theme';

import Burger from '../components/Burger/Burger';
import MenuResume from '../components/Menu/MenuResume';
import Resume from '../components/Resume/Resume'
import FooterResume from '../components/Footer/FooterResume';

const ResumePage = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
      <ThemeProvider theme={theme}>
          <GlobalStyles />
          <div>
            <Resume />
          </div>
          <div ref={node}>
            <Burger open={open} setOpen={setOpen} />
            <MenuResume open={open} setOpen={setOpen} />
          </div>
          <FooterResume />
      </ThemeProvider>
  );
}
export default ResumePage;
