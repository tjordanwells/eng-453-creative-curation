import React from 'react';

const Bio = () => {
    return (
        <div>
            <div className='grid grid-cols-2 m-12 gap-10'>
                <div>
                    <img src={require('../images/elephant_man_poster.jpg')} />
                </div>
                <div className='inter-font text-left pt-56'>
                    <p>
                        Joseph Merrick, famously known as <span className='kink-font font-semibold'>The Elephant Man</span>, was born with neurofibromatosis, a "genetic disorder that causes tumors to form on nerve tissue" &#040;Mayo Clinic&#41;. Merrick's nickname came from the features of his deformity and created a sensation among the English public. The Monday publication of The Evening Telegraph on Dec. 6, 1886, from Dundee, Scotland, contains the article: <span className='italic'>"The Elephant Man" - An Extraordinary Case</span>. This article tells the story of Joseph Merrick as he traveled through England performing in a side-show act where he split earnings with his manager until the police stopped his exhibition as it was "against public decency" &#40;Evening Telegraph&#41;. From here, Merrick traveled to Belgium, continuing his act, until his manager fled with all Merrick's saved earnings. Finally, Merrick returned to England, found help from the doctor Sir Frederick Treves, and obtained a room in the London Hospital. The case of The Elephant Man has been a century-long sensation in popular culture and has been the source of inspiration for multiple stage plays, films, and graphic novels.
                    </p>
                    <p className='pt-10'>
                        Representation in popular media has helped shape the mythos of <span className='kink-font font-semibold'>The Elephant Man</span> and elevated his status from side-show "freak" to a human being with a story worth more than an exhibit in P.T. Barnum's Egyptian Hall. Contemporary re-tellings of Joseph Merrick's story focus more on Joseph Merrick's humanity and experience as opposed to merely exploiting his genetic disorder. This project will juxtapose Mel Brooks and David Lynch's film, <span className='kink-font font-semibold italic'>The Elephant Man</span>, and a brief scene from Alan Moore's graphic novel, <span className='kink-font font-semibold italic'>From Hell</span>, with primary sources in the form of letters written to newspapers. Hopefully, this effort will explain how and why Joseph Merrick's life and personal experience were such a huge sensation.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Bio;
