import React from 'react';
import DownArrow from "./atoms/SVG/DownArrow";
import { CSSTransition } from "react-transition-group";

import './More.scss';


const More = (props) => {

  // const nodeRef = React.useRef(null)

  return (
    <CSSTransition
      // nodeRef={nodeRef}
      in
      appear={true}
      timeout={600}
      classNames="fade"
    >
      <div >
        <p>{props.text}</p>
        <DownArrow className='arrow down-effect' width={32} height={32} />
      </div>
    </CSSTransition>
  )
};

export default More;
