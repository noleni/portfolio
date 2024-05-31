import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Button from "../UI/Button";
import React from "react";

const ErrorStyle = styled.div`
  height: 100vh;
  padding-top: 120px;
  text-align: center;
`

const Error = () => {

  const navigate = useNavigate();

  return (
    <ErrorStyle>
     <h3>Cette page n'existe pas.</h3>
     <Button
      type="button"
      onClick={() => navigate("/")}
      >
        Revenir à la maison
      </Button>
    </ErrorStyle>
  )
};

export default Error;
