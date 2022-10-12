import React, { useState, useRef } from 'react';
import styled from 'styled-components';

import Button from "../UI/Button";
import emailjs from "emailjs-com";

const ContactSection = styled.section`
  .message-confirmation {
    color: var(--neon-pink);
  }
  @media(min-width: 768px) {
    width: 80%;
    padding-left: 150px;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

  & .form-control__input, .form-control__textarea {
    padding: 12px;
    margin: 12px 0;
    border-radius: 4px;
    border: 1px solid var(--dark-blue);
    font-family: var(--texts);
    font-size: 14px;
  }

  & .form-control__textarea {
    height: 100px;
  }

  & .form-control__input:focus, .form-control__textarea:focus {
    outline: none !important;
    border: 2px solid var(--neon-pink);
  }

  & .error-message {
    color: var(--neon-pink);
    margin-top: 0;
  }

  @media(min-width: 768px) {
    width: 60%;
  }
`;

const Contact = React.forwardRef((props, ref) => {

  const formRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [emailIsTouched, setEmailIsTouched] = useState(false);

  const [messageIsValid, setMessageIsValid] = useState(false);
  const [messageIsTouched, setMessageIsTouched] = useState(false);

  const [messageIsSent, setMessageIsSent] = useState(false);

  const emailValidityHandler = (e) => {
    e.target.value.match(validEmail) ? setEmailIsValid(true) : setEmailIsValid(false);
  };

  const messageValidityHandler = (e) => {
    e.target.value.length > 0 ? setMessageIsValid(true) : setMessageIsValid(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setEmailIsTouched(true);
    setMessageIsTouched(true);

    if (emailIsValid && messageIsValid) {
      emailjs.sendForm('service_7aby91j', 'template_r1810gh', formRef.current, 'i5Cr-_YMYYpMjhYT7')
      setMessageIsSent(true)
    } else {
      return;
    }
  };

  return (

  <ContactSection id="contact" ref={ref}>
    <p className="section-title">Restons en contact !</p>
    {!messageIsSent ?
      <>
        <p>Pour me contacter, vous pouvez remplir le formulaire ci-dessous. Je vous répondrai le plus rapidement possible.</p>
        <Form ref={formRef} onSubmit={sendEmail} className="form-control">
          <input
            ref={emailRef}
            onChange={emailValidityHandler}
            className='form-control__input'
            type="input"
            name="email"
            placeholder="Votre adresse mail..."
          />
          {!emailIsValid && emailIsTouched && <p className='error-message'>Saisissez une adresse email valide.</p>}
          <textarea
            ref={messageRef}
            onChange={messageValidityHandler}
            className='form-control__textarea'
            type="text-area"
            name="message"
            placeholder="Votre message..."
            />
            {!messageIsValid && messageIsTouched && <p className='error-message'>Vous ne pouvez pas m'envoyer un message vide.</p>}
            <Button type="submit">Envoyer</Button>
        </Form>
      </>
    :
      <p className='message-confirmation'>Votre message a bien été envoyé.</p>
    }
  </ContactSection>

  )
});

export default Contact;
