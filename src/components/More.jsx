import React from 'react';
import DownArrow from "./icons/SVG/DownArrow";
import { CSSTransition } from "react-transition-group";

import './More.scss';


const More = (props) => {


  return (
    <CSSTransition
      in
      appear={true}
      timeout={600}
      classNames="fade"
    >
      <div className='more-container'>
        <p>{props.text}</p>
        <DownArrow className='arrow down-effect' width={32} height={32} />
      </div>
    </CSSTransition>
  )
};

export default More;
