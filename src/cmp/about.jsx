import React, {useState} from 'react'
import about from '../img/about.svg'
import certif from '../img/certif.svg'
import TextAndPic from './text&pic'
import react from '../img/react.svg'
import other from '../img/other.svg'

const About = () => {
    const [Pic, setPic] = useState( [<img className='defPic' src={about} alt="about me" />,<img className='defPic' src={certif} alt="about me" />,<img className='defPic' src={react} alt="about me" />,<img className='defPic' src={other} alt="about me" />])
    return (
        <div className='about content'>
            <TextAndPic 
            pic={Pic[0]}
            title='Welcome'
            text="This is my personal webpage that is for introduction me as well as posible. here is my education, background and other things."
            />     
              <TextAndPic 
            pic={Pic[1]}
            dir='ltr'
            title='Education'
            text="I am textile engineering student at AMIRKABIR UNIVERSITY OF TECHNOLOGY(TEHRAN POLYTECHNIC) (2019 - 2023)
            bachelor's degree"
            />
              <TextAndPic 
            pic={Pic[2]}
            title='Developing'
            text="I started developing with internship then I used 'Mastering in React with mosh' course and now I'm reading 'Learning React O'REILY' book"
            />     
              <TextAndPic 
            pic={Pic[3]}
            dir='ltr'
            title='Other'
            text="I'm also interested in sports, reading bussiness books, podcast, the literature and..."
            />
        </div>
    )
}

export default About;