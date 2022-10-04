import React, {} from 'react';

import Home from '../sections/Home';
import About from '../sections/About';

import './Main.scss';


const Main = () => {

  return (
    <div className='home'>
      <Home
        h1Class={'title-big'}
        h2Class={'title'}
        projectsClass={'projects'}
      />
      <About
        presentationClass={'presentation'}
      />

    </div>
  );
};

export default Main;
