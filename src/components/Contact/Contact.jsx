import React from 'react'

import { 
            StyledContactSubTitle,
            StyledContactTitle,
            StyledContatcSection,
            StyledContactTitlesSection,
            StyledContactFormSection
        } 
from './ContactPage.styled';

import ContactForm from './ContactForm'

const Contact = () => {
    return (

        <StyledContatcSection >

            <StyledContactTitlesSection>

                <StyledContactSubTitle>contact</StyledContactSubTitle>

                <StyledContactTitle>Get in touch</StyledContactTitle>

            </StyledContactTitlesSection>

            <StyledContactFormSection>

                <ContactForm />

            </StyledContactFormSection>

        </StyledContatcSection>

    )
}

export default Contact