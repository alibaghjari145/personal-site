import React, { useState } from 'react'
import TextAndPic from './text&pic'
import mentalic from '../img/mentalic.jfif'
import mentalic2 from '../img/mentalic.png'
import leader from '../img/leader.jpg'
import personal from '../img/personal.png'

const Experiences = (props) => {
    const [Exp, setExp] = useState([
         {id:0, pic:<img className='defPic' src={personal} alt="" />, title:'Personal page', text:'It was one of my first HTML & CSS mini projects that you can see it in "alibaghjari.ineu.ir" ',
        dir:'ltr',
        },
        {id:1, pic:<img className='defPic' src={mentalic} alt="" />, title:'Internship', text:'This certificate is for five month of frontend developer internship in Mentalic startup',
        dir:'rtl',
        },  {id:2, pic:<img className='defPic' src={mentalic2} alt="" />, title:'Mentalic site', text:'I was the only frontend developer at mentalic and I code more than 80% of the site (but it is coming soon right now)',
        dir:'ltr',
        },  {id:3, pic:<img className='defPic' src={leader} alt="" />, title:'Leadership', text:'I was the leader of Mobtaker team in the first Amirkabir summer schools, we were handling an accelerator event there',
        dir:'rtl',
        }
    ])
    return(
            <div className='experiences content'>
             {Exp.map(e=>(
                  <TextAndPic key={e.id} dir={e.dir} title={e.title} text={e.text} pic={e.pic} />
             )
             )}
            
            </div>
    )
}
export default Experiences;