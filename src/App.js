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
      <footer className='p-24'>
          <p className='font-semibold pb-12'>Works Cited</p>
        <div className='flex'>
          <ul className='text-left'>
            <li className='pb-4'>
              [Gilbert a'Beckett]. "The Deformito-Mania." Punch, vol. 13, no. 321, 4 Sept. 1847, p. 90. Punch Historical Archive, 1841-1992, link.gale.com/apps/doc/ES700205776/PNCH?u=ncsu_main&sid=bookmark- PNCH&xid=f141357a. Accessed 29 Sept. 2022.
            </li>
            <li className='pb-4'>
              DiGravio, Will. “A Brief History of Mel Brooks, David Lynch and 'the Elephant Man'.” Film School Rejects, 15 July 2021, https://filmschoolrejects.com/mel-brooks-david-lynch-and-the-elephant-man/. 
            </li>
            <li className='pb-4'>
              FERGUSON, CHRISTINE. “‘GOOBLE-GABBLE, ONE OF US’: GROTESQUE RHETORIC AND THE VICTORIAN FREAK SHOW.” Victorian Review, vol. 23, no. 2, 1997, pp. 244–50. JSTOR, http://www.jstor.org/stable/27794872. Accessed 18 Oct. 2022.
            </li>
            <li className='pb-4'>
              Lynch, David, director. The Elephant Man. 1980. 
            </li>
            <li className='pb-4'>
              “Neurofibromatosis.” Mayo Clinic, Mayo Foundation for Medical Education and Research, 21 Jan. 2021, https://www.mayoclinic.org/diseases-conditions/neurofibromatosis/symptoms-causes/syc-20350490#:~:text=Neurofibromatoses%20are%20a%20group%20of,2%20(NF2)%20and%20schwannomatosis. 
            </li>
            <li className='pb-4'>
              "THE BOUNDARY ENQUIRY AT COVENTRY." Birmingham Daily Post, 12 Apr. 1890. British Library Newspapers, link.gale. com/apps/doc/BB3201323407/BNCN?u=ncsu_main&sid=bookmark-BNCN&xid=1d0d1f70. Accessed 20 Oct. 2022.
            </li>
            <li className='pb-4'>
              "THE DEATH OF THE 'ELEPHANT MAN'." Huddersfield Chronicle, 16 Apr. 1890, p. 4. British Library Newspapers, link.gale.com/apps/doc/R3208449911/BNCN?u=ncsu_main&sid=bookmark- BNCN&xid=e7f94735. Accessed 20 Oct. 2022.
            </li>
            <li className='pb-4'>
              "“the Elephant Man.”." Cheltenham Chronicle, 8 Jan. 1887, p. 8. British Library Newspapers, link.gale.com/apps/doc/ IS3245179932/BNCN?u=ncsu_main&sid=bookmark-BNCN&xid=0fcdcc23. Accessed 20 Oct. 2022.
            </li>
            <li className='pb-4'>
              "The Elephant Man." Portsmouth Evening News, 15 Apr. 1890, p. 3. British Library Newspapers, link.gale.com/apps/doc/IG3218535185/BNCN?u=ncsu_main&sid=bookmark- BNCN&xid=9fe3e8dd. Accessed 2 Oct. 2022.
            </li>
            <li className='pb-4'>
              "THE ELEPHANT MAN." Birmingham Daily Post, 6 Jan. 1887. British Library Newspapers, link.gale.com/apps/ doc/BC3201294785/BNCN?u=ncsu_main&sid=bookmark-BNCN&xid=1c4d9155. Accessed 2 Oct. 2022.
            </li>
          </ul>
          <p>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
