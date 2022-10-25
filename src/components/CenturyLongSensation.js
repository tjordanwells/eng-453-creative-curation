import React from 'react';
import Youtube from 'react-youtube';

const CenturyLongSensation = () => {
    const opts = {
        height: '440',
        width: '800'
    }

    return (
        <div className='mb-12 inter-font'>
            <h2 className='kink-font text-5xl'>Joseph Merrick in Alan Moore's <br/> <span className='italic'>From Hell</span></h2>
            <div className='text-left pt-4'>
                <p className='p-6'>
                    Alan Moore's From Hell is a fictionalized retelling of the Jack the Ripper story that serves more as a conspiracy theory as to who Jack the Ripper was. However, Alan Moore incorporates real historical characters to present the story with a sense of realism. The main character, Dr. William Gull, is an acquaintance of Sir Frederick Treves, the doctor who helped Joseph Merrick find humane treatment when he returned to England after retiring from his side-show act.
                </p>
                <p className='p-6'>
                    This scene inspired me to choose <span className='kink-font font-semibold'>The Elephant Man</span> as my object for creative curation. This section consists of a small interaction between William Gull, Frederick Treves, and Joseph Merrick and only spans two of the five-hundred and seventy-two pages of the graphic novel. Nevertheless, Alan Moore introduces a contemporary audience to multiple sensational Victorian topics despite the scene's length. Moore also writes Merrick's dialogue in a way that allows the reader to experience what Joseph Merrick sounded like, a sensational tactic that plays on the reader's impression of Merrick's condition through dialogue.
                </p>
                <p className='p-6'>
                    The dialogue between William Gull and Joseph Merrick addresses the Victorian poster artists' treatment of Merrick in the press. Rather than receiving it as an insult, Gull explains that it could be taken as a compliment considering the Goddess Ganesa's appearance as an elephant. Considering England's colonization of India started in the 1850s, Indian cultures and religions would have likely been a topic of conversation, especially when discussing exoticism or otherness. Moore's subtle incorporation addressing colonialism gives us a fictional representation of how the Victorian population was quick to label or related things different as not from Britain. Finally, Moore leaves us with Merrick referencing the idea that he would be worshiped in India, which is somewhat offensive and shows very little care from William Gull regarding how Hinduism functions. The concept that Merrick would be elevated as a god exoticizes Merrick's condition and potentially perpetuates racist stereotypes directed toward the newly colonized Indian population.
                </p>
            </div>
            <div className='grid grid-cols-2 p-12'>
                <img src={require('../images/fromHell23.jpg')} />
                <img src={require('../images/fromHell24.jpg')} />
            </div>
            <h2 className='text-5xl kink-font m-12'>Scenes from David Lynch's<br/><span className='italic kink-font'>The Elephant Man</span></h2>
            <div className='text-left pb-12'>
                <p className='pb-6'>
                    <span className='kink-font font-semibold italic'></span>The Elephant Man was produced by Mel Brooks (Spaceballs, Blazing Saddles) and was directed by David Lynch, whose only major film credit to this point was Eraserhead, a low-budget, body horror film shot in black and white. In a Film School Rejects article, Will DiGravio cites a Guardian interview where Mel Brooks explains why he chose to produce this film.
                </p>
                <p className='px-12 pb-6'>
                    "My films, even if they're comic, they're about: 'Let's accept the bizarre. Let's learn more about these creatures — or these Jews,' Brooks told The Guardian in 2008. 'I know the Elephant Man wasn't Jewish, but to me, the story had all the aspects of anti-semitism, and Joseph Merrick had all the traits of the classic wandering Jew.'"
                </p>
                <p className='pb-6'>
                    Surprisingly, Merrick's deformity was not at the center of what would make this a sensational film. Instead, it was the man behind the deformity, his experience, and the intention to showcase the idea of otherness. Mel Brooks recognized this and immediately related this to his own experience as a Jewish man. The attention to the humanity of Joseph Merrick and the sympathetic treatment offers a window into how the Victorian public viewed his case during his last years living in the London Hospital. The scenes below offer a unique insight into what made <span className='kink-font font-semibold italic'>The Elephant Man</span> a sensation and is a much-needed departure from the side-show treatment into something more sympathetic and human.
                </p>
                <p className='pb-6'>
                    While telling the story of Joseph Merrick's beginnings performing as <span className='kink-font font-semibold'>The Elephant Man</span> in freakshow acts is essential, it is even more important to point out the compassion people had for him in his final years. This compassion will solidify the story and legacy of <span className='kink-font font-semibold'>The Elephant Man</span> for the next one hundred years.
                </p>
            </div>
            <div className='grid grid-cols-2 gap-10'>
                <div className='text-5xl kink-font text-right'>
                    Sir Frederick Treves sees The Elephant Man for the first time
                </div>
                <Youtube videoId='gADayU4DP9U' opts={opts} />
                <Youtube videoId='5pJOdrchPlo' opts={opts} />
                <div className='text-5xl kink-font text-left pl-12'>
                    Mrs. Treves's emotional reaction to Joseph visit for tea
                </div>
                <div className='text-5xl kink-font text-right'>
                    The petition to the Victorian public that Merrick is, a human being
                </div>
                <Youtube videoId='uqg7Ow4SNk8' opts={opts} />
            </div>
        </div>
    )
}

export default CenturyLongSensation;