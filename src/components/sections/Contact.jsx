import React, { useRef } from 'react';
import styled from 'styled-components';

import Button from "../UI/Button";
import emailjs from "emailjs-com";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  & .form-control__input {
    width: 100%;
    padding: 12px;
    margin: 12px;
    border-radius: 4px;
    border: 1px solid var(--dark-blue);
  }

  & .form-control__textarea {
    width: 100%;
    height: 100px;
    padding: 12px;
    margin: 12px;
    border-radius: 4px;
    border: 1px solid var(--dark-blue);
  }
`

const Contact = React.forwardRef((props, ref) => {

  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7aby91j', 'template_r1810gh', formRef.current, 'i5Cr-_YMYYpMjhYT7')
      .then((result) => {
          console.log(result.text);
          console.log(formRef.current)
      }, (error) => {
          console.log(error.text);
      });
  };

  return (

  <section id="contact" ref={ref}>
    <p className="section-title">Contact</p>
    <p>Pour me contacter, remplissez le formulaire ci-dessous. Je vous répondrai le plus rapidement possible.</p>
    <Form ref={formRef} onSubmit={sendEmail} className="form-control">
      <input
        className='form-control__input'
        type="text"
        name="email"
        placeholder="Votre adresse mail..."
      />
      <textarea
        className='form-control__textarea'
        type="text-area"
        name="message"
        placeholder="Votre message..."
        />
      <Button type="submit">Envoyer</Button>
    </Form>
  </section>

  )
});

export default Contact;
