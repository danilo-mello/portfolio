import React from 'react'

import { 
            StyledContactSubTitle,
            StyledContactTitle,
            StyledContatcSection,
            StyledContactTitlesSection,
        } 
from './Contact.styled';

import ContactForm from './ContactForm'

const Contact = () => {
    return (

        <StyledContatcSection >

            <StyledContactTitlesSection>

                <StyledContactSubTitle>contact</StyledContactSubTitle>

                <StyledContactTitle>get in touch</StyledContactTitle>

            </StyledContactTitlesSection>


            <ContactForm />


        </StyledContatcSection>

    )
}

export default Contact