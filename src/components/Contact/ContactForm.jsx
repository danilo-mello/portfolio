import React, { useState } from 'react'

import { send } from 'emailjs-com';
import isEmail from 'validator/lib/isEmail';

import { StyledContactForm, SuccessMessage, ErrorMessage } from './ContactForm.styled';

const ContactForm = () => {

    const [toSend, setToSend] = useState({
        name: '',
        email: '',
        message: '',
        subject: '',
    })

    const [messageSent, setMessageSent] = useState({
        status: false,
        message: '',
    })
    const [error, setError] = useState({
        status: false,
        message: '',
    })

    const onSubmit = (e) => {
        e.preventDefault();
        if (toSend.name && isEmail(toSend.email) && toSend.message && toSend.subject){
            send(
                process.env.REACT_APP_Service_ID,
                process.env.REACT_APP_TEMPLATE_ID,
              toSend,
              process.env.REACT_APP_User_ID
            )
              .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setMessageSent({
                    status: true,
                    message: 'Thank you! Your message was received successfully.'
                })
                setError({
                    status: false,
                    message: ''
                })
                setToSend({
                    name: '',
                    email: '',
                    message: '',
                    subject: '',
                })
              })
              .catch((err) => {
                setError({
                    status: true,
                    message: 'There was a problem, Please try again.'
                })
                console.log(err);
              })
        } else{
            if(!toSend.name){
                setError({
                    status: true,
                    message: 'Please inform your name!'
                })
            } else if(!toSend.email){
                setError({
                    status: true,
                    message: 'Please inform your email!'
                })
            } else if(!isEmail(toSend.email)){
                setError({
                    status: true,
                    message: 'Please inform a vallid email!'
                })
            } else if(!toSend.subject){
                setError({
                    status: true,
                    message: 'Please inform a subject!'
                })
            } else if(!toSend.message){
                setError({
                    status: true,
                    message: 'Please fill the message field!'
                })
            } else 
            setError({
                status: true,
                message: 'There was a problem, Please try again.'
            })
        }


    }

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    }

    const handleCloseMessage = () => {
        setError({
            status: false,
            message: ''
        })
        setMessageSent({
            status: false,
            message: ''
        })
    }

    return (
        <StyledContactForm>
            
            <form onSubmit={onSubmit}>

                <h2>send me a message!</h2>


                <input
                    type='text'
                    name='name'
                    placeholder='name'
                    value={toSend.name}
                    onChange={handleChange}
                />
                <input
                    type='email'
                    name='email'
                    placeholder='email'
                    value={toSend.email}
                    onChange={handleChange}
                />
                <input
                    type='text'
                    name='subject'
                    placeholder='subject'
                    value={toSend.subject}
                    onChange={handleChange}
                />
                <textarea
                    type='text'
                    name='message'
                    placeholder='message'
                    value={toSend.message}
                    onChange={handleChange}
                />
                {
                    messageSent.status && <SuccessMessage onClick={() => {handleCloseMessage()}}>{messageSent.message}</SuccessMessage>
                }
                {
                    error.status && <ErrorMessage onClick={() => {handleCloseMessage()}}>{error.message}</ErrorMessage>
                }

                <button type='submit'>send</button>
            </form>
            
            
        </StyledContactForm>
    )
}

export default ContactForm