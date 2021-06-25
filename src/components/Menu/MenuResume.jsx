import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';

const Menu = ({ open }) => {
    
  return (
    <StyledMenu open={open}>
      <a href="/">
        home
      </a>
      <a href="/#about">
        about
      </a>
      <a href="/#works">
        works
      </a>
      <a href="/#contact">
        contact
        </a>
    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu;
