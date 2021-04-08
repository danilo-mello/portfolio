import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';

const Menu = ({ open }) => {
    
  return (
    <StyledMenu open={open}>
      <a href="/">
        works
      </a>
      <a href="/">
        about
        </a>
      <a href="/">
        contact
        </a>
    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu;
