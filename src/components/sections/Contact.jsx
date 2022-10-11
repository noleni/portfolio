import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import Button from "../UI/Button";
import emailjs from "emailjs-com";

const ContactSection = styled.section`

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

  @media(min-width: 768px) {
    width: 60%;
  }
`;

const Contact = React.forwardRef((props, ref) => {

  const formRef = useRef();

  const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [messageIsValid, setMessageIsValid] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  const emailValidityHandler = (e) => {
    e.target.value.match(validEmail) ? setEmailIsValid(true) : setEmailIsValid(false);
  };

  const messageValidityHandler = (e) => {
    e.target.value.length > 0 ? setMessageIsValid(true) : setMessageIsValid(false);
  }

  useEffect(() => {
    emailIsValid && messageIsValid ? setFormIsValid(true) : setFormIsValid(false);
  }, [emailIsValid, messageIsValid]);


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7aby91j', 'template_r1810gh', formRef.current, 'i5Cr-_YMYYpMjhYT7')
      .then((result) => {
          console.log(result.text);
          console.log(formRef.current)
      }, (error) => {
          console.log(error.text);
      });
      formRef.current.values = "";
  };

  return (

  <ContactSection id="contact" ref={ref}>
    <p className="section-title">Restons en contact !</p>
    <p>Pour me contacter, vous pouvez remplir le formulaire ci-dessous. Je vous répondrai le plus rapidement possible.</p>
    <Form ref={formRef} onSubmit={sendEmail} className="form-control">
      <input
        onChange={emailValidityHandler}
        className='form-control__input'
        type="input"
        name="email"
        placeholder="Votre adresse mail..."
      />
      <textarea
        onChange={messageValidityHandler}
        className='form-control__textarea'
        type="text-area"
        name="message"
        placeholder="Votre message..."
        />
        <Button type="submit" disabled={!formIsValid}>Envoyer</Button>
    </Form>
  </ContactSection>

  )
});

export default Contact;
