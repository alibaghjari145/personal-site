import React, { useState } from 'react'
import TextAndPic from './text&pic'
import {ExpData} from './data'

const Experiences = (props) => {
    const [Exp, setExp] = useState(ExpData)
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