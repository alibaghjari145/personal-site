import React from 'react'
import { useState , useEffect} from 'react'

const SkillBox = (props) => {

    const [persent, setpersent] = useState(0);

   
    useEffect(() => {
        
      setTimeout(()=>{
        let defrence= Boolean(props.pers>persent)

          if(defrence){
              setpersent(persent=>persent+=1)
          }
      },40);
    })
    const width = window.innerWidth;
    return(
        <div key={props.id} style={{ borderColor: props.color }} className='skill-box'>
            {props.children}
            <div className='skill-text'>
                <h3 style={{visibility:width>768?'visible':'hidden'}}>
                    {props.title}
                </h3>
                <div className="skil-line-out">
                    <div style={{ backgroundColor: props.color, width: `${persent}%` }} className="skil-line">
                    </div>
                </div>
                <h4>{persent}%</h4>
            </div>

        </div>)
}

export default SkillBox;