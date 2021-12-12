import React,{useState} from 'react'
import Typist from 'react-typist';
import { SkillArray } from './data';
import SkillBox from './skillbox'



const Skills = () => {

const [box] = useState(SkillArray)
    return (
        <div className='skills content'>
            <h2>
                <Typist avgTypingDelay={120} className='my-title' >
                    The most importants
                </Typist>
            </h2>
            {box.map(
                box => (<SkillBox
                    key={box.id}
                    title={box.title}
                    pers={box.pers}
                    color={box.color}
                    id={box.id}
                >
                    {box.img}


                </SkillBox>)
            )}
        </div>
    )
}


export default Skills