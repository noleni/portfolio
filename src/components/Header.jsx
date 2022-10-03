import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Button from './UI/Button';


import styles from './Header.module.css';


const navLinks = [
  {
    name: 'à propos',
    url: '/#about',
  },
  {
    name: 'projets',
    url: '/#jobs',
  },
  {
    name: 'contact',
    url: '/#contact',
  },
];

const Header = () => {

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 100);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const timeout = isMounted ? 300 : 0;
  const fadeDownClass = isMounted ? 'fadedown' : '';

  return (
    <div className={styles.header}>
      <ul>
        <TransitionGroup component={null}>
          {isMounted &&
            navLinks.map(({url, name}, i) => (
              <CSSTransition key={i} classNames={fadeDownClass} timeout={timeout}>
                <li key={i} style={{ transitionDelay: `${isMounted ? i * 100 : 0}ms` }}>
                  <a href={url}>{name}</a>
                </li>
              </CSSTransition>
            ))
          }
        </TransitionGroup>
      </ul>
          {isMounted &&
            <CSSTransition classNames={fadeDownClass} timeout={timeout}>

      <Button type="button">CV</Button>
            </CSSTransition>
          }
    </div>
  )
};

export default Header;
