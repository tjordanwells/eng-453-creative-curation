import React from 'react';

const FreakshowAndColonialism = () => {


    return (
        <div className='inter-font'>
            <h1 className='text-5xl kink-font mb-12'>The Victorian Freakshow & Colonialism</h1>
            <div className='text-left p-12'>
                <p className='pb-12'>
                    With the advent of P.T. Barnum's Egyptian Hall and The Great Exhibition, the Victorian public in and around London became enamored by the exotic treasures and characters seemingly imported by colonial conquest. However, colonialism did not only aim to take or trade resources with the new world. It also intended to spread an elevated culture to the colonized regions.
                </p>
                <p className='pb-12'>
                This lens of colonialism necessitated the idea of otherness and, at times, perpetuated racism and British superiority over its colonies. What better way to display superiority than exhibit people with physical differences and label them "freaks," exotic, or make false claims that they are from <span className='kink-font font-semibold'>The Orient</span> to sensationalize otherness?
                </p>
            </div>
            <div className='grid grid-cols-2 gap-10'>
                <div>
                    <img className='shadow-xl' src={require('../images/punch_1847.png')} />
                </div>
                <div className="text-left">
                    <p>
                        This article from <span class="italic">Punch</span> Magazine, published in 1847 satirizes P.T. Barnum's Egyptian Hall in London. "<span className='font-semibold'>'Deformito-mania'</span> was the term coined by <span className="italic">Punch</span> in 1843 to describe contemporary fascination with the so-termed human curiousities. At the mid-century, visitors flocked regularly to the Egyptian Hall in London for P.T. Barnum's latest display of genuine and fake oddities during his frequent tours of Europe" &#40;Ferguson 245&#41;.
                    </p>
                    <p className='mt-8'>
                        "The name of this popular venue confirms the connection in the early Victorian imagination between physical and geographic Otherness. If a side-show performer looked different, it was assumed that he or she &#40;sometimes both at once&#41; must be from an undefined and strictly non-British region of elsewhere" &#40;Ferguson 245&#41;.
                    </p>
                </div>
                <div class='text-right'>
                    <p>
                        This image to the right is the actual Egyptian Hall. We can see from the signs on the building that there are a number of exhibitions available to view. The architecture compared to neighboring buildings also serves to create a sense of exoticism and sensation in order to attract the public from the street.  
                    </p>
                    <p className="pt-8">
                        The permanent features of this building are far from the sideshow tent where we meet Joseph Merrick in David Lynch's <span className='italic'>The Elephant Man</span>. Still, the two structures' purposes remain the same: to generate intrigue, suspense, and a sense of sensation to lure the public in to view their <span className='kink-font font-semibold'>"exhibitions"</span>.
                    </p>
                </div>
                <div className='fill'>
                    <img className='shadow-xl' src={require('../images/egyptian_hall.jpeg')} />
                </div>
            </div>
        </div>
    );
};

export default FreakshowAndColonialism;
