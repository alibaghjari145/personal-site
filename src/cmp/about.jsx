import React, {useState} from 'react'
import TextAndPic from './text&pic'
import { AboutData } from './data'

const About = () => {
    const [About, setAbout] = useState(AboutData )
    return (
        <div className='about content'>
            {About.map(
              e=> ( <TextAndPic 
                key={e.id}
              pic={e.img}
              dir={e.dir}
              title={e.title}
              text={e.text}
              />)
            )}
            
            
        </div>
    )
}

export default About;