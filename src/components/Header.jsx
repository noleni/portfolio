import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';


const navLinks = [
  {
    name: 'à propos',
    url: '/#about',
  },
  {
    name: 'projets',
    url: '/#projects',
  },
  {
    name: 'contact',
    url: '/#contact',
  }
];

const StyleLargeNav = styled.nav`

  display: flex;
  justify-content: end;
  align-items: center;
  position: fixed;
  top: 0px;
  z-index: 11;
  ${'' /* padding: 4px 50px; */}
  width: 100%;
  height: 60px;
  background-color: rgba(251, 247, 242, 0.45);
  box-shadow: 0 0 15px rgba(0,0,0,0.06);
  backdrop-filter: blur(10px);

  .ul-large {
    display: none;
  }

  .btn-cv-large {
    display: none;
  }

  .btn-small-nav {
    border: none;
    background-color: transparent;
    font-size: 62px;
  }

  @media(min-width: 768px) {

    .btn-small-nav {
      display: none;
    }

    .ul-large {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: flex-end;
    padding: 0px;
    margin: 0px;
    list-style: none;
  }
  }
`

const Header = () => {

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 200);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const timeout = isMounted ? 1000 : 0;
  const fadeDownClass = isMounted ? 'fadedown' : '';

  return (
    <StyleLargeNav>
      <ul className='ul-large'>
        <TransitionGroup component={null}>
          {isMounted &&
            navLinks.map(({url, name}, i) => (
              <CSSTransition key={i} classNames={fadeDownClass} timeout={timeout}>
                <li key={i} style={{ transitionDelay: `${isMounted ? i * 300 : 0}ms` }}>
                  <a href={url}>{`0${i + 1} - ${name}`}</a>
                </li>
              </CSSTransition>
            ))
          }
        </TransitionGroup>
      </ul>
      {isMounted &&
        <CSSTransition classNames={fadeDownClass} timeout={timeout}>
          <button className='btn-cv-large' type="button">CV</button>
        </CSSTransition>
      }
      <button className="btn-small-nav" type="button">&#8801;</button>
    </StyleLargeNav>
  )
};

export default Header;
