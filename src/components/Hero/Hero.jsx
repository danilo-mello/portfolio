import React from 'react';
import { 
  StyledHero,
  StyledHeroTitle,
  StyledHeroSubTitle,
  StyledHeroImage,
  StyledHeroLinkSection, 
  StyledHeroLink,
} from './Hero.styled';

  import home from '../../static/img/home.jpg'

const Hero = () => {
    
  return (
    <StyledHero >
        <StyledHeroTitle>danilo mello</StyledHeroTitle>
        <StyledHeroSubTitle>portfolio - developer</StyledHeroSubTitle>
        <StyledHeroLinkSection>
          <StyledHeroLink href="/projects">works </StyledHeroLink>
          &bull;
          <StyledHeroLink href="/about"> about </StyledHeroLink> 
          &bull;
          <StyledHeroLink href="/contact"> contact </StyledHeroLink>  
        </StyledHeroLinkSection>
       
        <StyledHeroImage src={home} height="400px" alt="danilo mello" />
    </StyledHero>
  )
}

export default Hero;
