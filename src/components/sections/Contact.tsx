import React, { useState, useRef } from "react";
import styled from "styled-components";

import Button from "../UI/Button";
import emailjs from "emailjs-com";

const ContactSection = styled.section`
  height: 60vh;
  margin-top: 60px;

  .section-title {
    padding: 0 30px;
  }
  .message-confirmation {
    color: var(--celadon-2);
  }
  @media (min-width: 768px) {
    width: 60%;
    margin: 60px auto;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;

  & input,
  & textarea {
    padding: 12px;
    margin: 12px 0;
    border-radius: 4px;
    border: 1px solid var(--dark-green);
    font-family: var(--texts);
    font-size: 14px;
  }

  & textarea {
    height: 100px;
  }

  & input:focus,
  & textarea:focus {
    outline: none !important;
    border: 2px solid var(--celadon-2);
  }

  & .error-message {
    color: var(--celadon-2);
    margin-top: 0;
  }
`;

const Contact = () => {
  const formRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const validEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [emailIsTouched, setEmailIsTouched] = useState(false);

  const [messageIsValid, setMessageIsValid] = useState(false);
  const [messageIsTouched, setMessageIsTouched] = useState(false);

  const [messageIsSent, setMessageIsSent] = useState(false);

  const emailValidityHandler = (e : any) => {
    e.target.value.match(validEmail)
      ? setEmailIsValid(true)
      : setEmailIsValid(false);
  };

  const messageValidityHandler = (e : any) => {
    e.target.value.length > 0
      ? setMessageIsValid(true)
      : setMessageIsValid(false);
  };

  const sendEmail = (e : any) => {
    e.preventDefault();
    setEmailIsTouched(true);
    setMessageIsTouched(true);

    if (emailIsValid && messageIsValid) {
      emailjs
        .sendForm(
          "service_du93sgv",
          "template_r1810gh",
          formRef.current!,
          "7djMiV7XIYs6Mb_HB"
        )
        .then((res) => {
          console.log(res);
          if (res.status === 412) {
            alert("oops");
          } else {
            setMessageIsSent(true);
          }
        });
    } else {
      return;
    }
  };

  return (
    <ContactSection id="contact">
      <p className="section-title">04. Restons en contact !</p>
      {messageIsSent && (
        <p className="message-confirmation">Votre message a bien été envoyé.</p>
      )}
      <Form ref={formRef.current} onSubmit={sendEmail}>
        <input
          ref={emailRef.current}
          onChange={emailValidityHandler}
          type="input"
          name="email"
          placeholder="Votre adresse mail..."
        />
        {!emailIsValid && emailIsTouched && (
          <p className="error-message">Saisissez une adresse email valide.</p>
        )}
        <textarea
          ref={messageRef.current}
          onChange={messageValidityHandler}
          name="message"
          placeholder="Votre message..."
        />
        {!messageIsValid && messageIsTouched && (
          <p className="error-message">
            Vous ne pouvez pas m'envoyer un message vide.
          </p>
        )}
        <Button type="submit">Envoyer</Button>
      </Form>
    </ContactSection>
  );
};

export default Contact;
