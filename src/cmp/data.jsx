import mentalic from '../img/mentalic.jfif'
import mentalic2 from '../img/mentalic.png'
import leader from '../img/leader.jpg'
import personal from '../img/personal.png'
import about from '../img/about.svg'
import certif from '../img/certif.svg'
import react from '../img/react.svg'
import other from '../img/other.svg'

export const ExpData = [{
        id: 4,
        pic: < img className = 'defPic'
        src = { personal }
        alt = "" / > ,
        title: 'Personal page',
        text: 'It was one of my first HTML & CSS mini-projects that you can visit at "alibaghjari.ineu.ir".',
        dir: 'ltr',
    },
    {
        id: 1,
        pic: < img className = 'defPic'
        src = { mentalic }
        alt = "" / > ,
        title: 'Internship',
        text: 'This certificate is for a five-month frontend developer internship in Mentalic startup.',
        dir: 'rtl',
    }, {
        id: 2,
        pic: < img className = 'defPic'
        src = { mentalic2 }
        alt = "" / > ,
        title: 'Mentalic site',
        text: 'I was the only frontend developer at Mentalic and coded more than 80% of the site (it is coming soon).',
        dir: 'ltr',
    }, {
        id: 3,
        pic: < img className = 'defPic'
        src = { leader }
        alt = "" / > ,
        title: 'Leadership',
        text: 'I was the leader of Mobtaker team in the first Amirkabir summer school. We handled an accelerator event there.',
        dir: 'rtl',
    }
]

export const AboutData=[
    {
        id:4,
        img: <img className='defPic' src={about} alt="about me" />,
        dir:'',
        title:'Welcome',
        text:`This is my personal webpage that provides my personal and professional information. Here is my education, background, and other stuff.`
    },   {
        id:1,
        img: <img className='defPic' src={certif} alt="about me" />,
        dir:'ltr',
        title:'Education',
        text:'I am a textile engineering student at Amirkabir University of Technology (Tehran Polytechnic) (Bachelor’s degree; 2019-2023).'
    },   {
        id:2,
        img:<img className='defPic' src={react} alt="about me" />,
        dir:'',
        title:'Developing',
        text:"I started developing with internship, then I used 'Mastering in React with Mosh' course and now I'm reading 'Learning React O'Reily' book."
    },   {
        id:3,
        img:<img className='defPic' src={other} alt="about me" />,
        dir:'ltr',
        title:'Other',
        text:"I'm also interested in sports, reading business books, Chess,  listening to podcasts, literature, etc."
    },
   
    
    
    ]
