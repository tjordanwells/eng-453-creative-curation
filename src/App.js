import React, { useRef, useState, useEffect } from 'react';

import Bio from './components/Bio';
import CenturyLongSensation from './components/CenturyLongSensation';
import FreakshowAndColonialism from './components/FreakshowAndColonialism';
import Attitudes from './components/Attitudes';
import './App.css';
import './fonts/KinckqTest-Variable.ttf';

const App = () => {
  const [show, setShow] = useState(true)
  const navbarControl = () => {
    if (window.scrollY > 100) setShow(false)
    else setShow(true)
  }

  useEffect(() => {
    window.addEventListener('scroll', navbarControl)
    return () => window.removeEventListener('scroll', navbarControl)
  }, [])

  const handleClick = (ref) => {
    console.log('working')
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const items = {
    home: {
        name: 'Home',
        ref: useRef(null)
    },
    freakAndColonialism: {
        name: 'The Victorian Freak Show & Colonialism',
        ref: useRef(null)
    },
    century: {
        name: 'A Century Long Sensation',
        ref: useRef(null)
    },
    attitudes: {
        name: 'Letters to the Editor',
        ref: useRef(null)
    }
  }

  return (
    <div className="App">
      <div className={`flex justify-between nav ${!show && 'bg-neutral-100 drop-shadow'}`}>
          {Object.keys(items).map((key, idx) => {
              return <div className='shrink nav-item' key={`nav-item-${idx}`} onClick={() => handleClick(items[key].ref)}>{items[key].name}</div>
          })}
      </div>
      <header ref={items.home.ref} className="App-header font-extralight">
        <h1 className='text-8xl mb-16'>
          The Elephant Man
        </h1>
        <p className='inter-font'>Joseph Merrick</p>
      </header>
      <Bio />
      <div ref={items.freakAndColonialism.ref} className='m-12'>
        <div className='divider my-12 text-center' />
        <FreakshowAndColonialism />
      </div>
      <div ref={items.century.ref} className='m-12'>
        <div className='divider my-12 text-center' />
        <CenturyLongSensation />
      </div>
      <div ref={items.attitudes.ref} className='m-12'>
        <div className='divider my-12 text-center' />
        <Attitudes />
      </div>
      <footer className='p-24'>Footer</footer>
    </div>
  );
}

export default App;
