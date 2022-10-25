import React from 'react';

const Attitudes = () => {
    return (
        <div className='inter-font'>
            <h1 className='text-5xl kink-font mb-12'>Letters and Contemporary Reception</h1>
            <p className='text-left pt-2 pb-16'>
                The following newspaper clippings reveal the Victorian public's attitudes toward Joseph Merrick when the papers informed them of his medical condition. For the most part, Merrick's case is seen as sympathetic, and the letters written to the newspapers show that people seemed to have genuinely cared about what came of Merrick. Here we learn that Merrick even had beneficiaries, other than Dr. Treves, who helped financially support him and provided him with crafts to pass his time in the hospital. The letters and reports surrounding Joseph Merrick were often syndicated across multiple publications, showing just how sensational his story was. At first, people were curious about his condition and would have likely been a part of the crowd paying to see his sideshow act on the street. Still, given Joseph's new home in the London Hospital and the alternative context for people to learn of his condition, Merrick was viewed much more humanely, still sensational, but more dignified.
            </p>
                <div class='columns-3 gap-6'>
                    <img className='w-full shadow-xl' src={require('../images/chairmanOriginal.png')} />
                    <img className='w-full shadow-xl' src={require('../images/CheltenhamChronicle_Jan8.png')} />
                    <img className='w-full shadow-xl' src={require('../images/chairmanLetter.png')} />
                    <img className='w-full shadow-xl pt-6' src={require('../images/DeathOfTheElephantMan.png')} />
                </div>
        </div>
    );
};

export default Attitudes;