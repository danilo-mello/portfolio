import React from 'react';
import { 
  StyledFooter,
  StyledFooterLinks,
  StyledFooterLink,
  StyledFooterCR 
} from './Footer.styled';

const Footer = () => {
    
  return (
    <StyledFooter>
      <StyledFooterLinks>
        <StyledFooterLink href="/">home </StyledFooterLink>
        <StyledFooterLink href="/projects">works </StyledFooterLink>
        <StyledFooterLink href="/about">about </StyledFooterLink> 
        <StyledFooterLink href="/contact">contact </StyledFooterLink> 
      </StyledFooterLinks>
      <StyledFooterCR>
        © Danilo Mello 2021 - All Rights Reserved
      </StyledFooterCR>
        
    </StyledFooter>
  )
}

export default Footer;
