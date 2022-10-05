import React from 'react';

const Attitudes = () => {
    return (
        <div className='inter-font'>
            <h1 className='text-5xl kink-font mb-12'>Letters & Contemporary Reception</h1>
            <div className='flex'>
                <div>
                    <img className='shadow-2xl' src={require('../images/chairmanOriginal.png')} />
                </div>
                <div>
                    <img className='shadow-2xl' src={require('../images/chairmanLetter.png')} />
                </div>
                <div className='p-12'>
                    This section is a work in progress... I will be adding responses to these letters from their primary sources, but lost them when I tried to bookmark the pages
                </div>
            </div>
        </div>
    );
};

export default Attitudes;