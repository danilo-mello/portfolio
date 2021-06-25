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
        &bull;
        <StyledFooterLink href="/#works"> works </StyledFooterLink>
        &bull;
        <StyledFooterLink href="/#about"> about </StyledFooterLink> 
        &bull;
        <StyledFooterLink href="/#contact"> contact </StyledFooterLink> 
      </StyledFooterLinks>
      <StyledFooterCR>
        © Danilo Mello 2021 - All Rights Reserved
      </StyledFooterCR>
        
    </StyledFooter>
  )
}

export default Footer;
