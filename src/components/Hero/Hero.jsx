import React from 'react';
import { 
  StyledHero,
  StyledHeroTitle,
  StyledHeroSubTitle,
  StyledHeroImage,
  StyledHeroLinkSection, 
  StyledHeroLink,
} from './Hero.styled';

  import home from '../../static/img/home1.jpg'

const Hero = () => {
    
  return (
    <StyledHero >
        <StyledHeroTitle>danilo mello</StyledHeroTitle>
        <StyledHeroSubTitle>portfolio - full stack developer</StyledHeroSubTitle>
        <StyledHeroLinkSection>
          <StyledHeroLink href="#about">about </StyledHeroLink> 
          &bull;
          <StyledHeroLink href="#works"> works </StyledHeroLink>
          &bull;
          <StyledHeroLink href="#contact"> contact </StyledHeroLink>  
        </StyledHeroLinkSection>
       
        <StyledHeroImage src={home} alt="danilo mello" />
    </StyledHero>
  )
}

export default Hero;
