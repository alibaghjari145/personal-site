import React from 'react'

const TextAndPic = (props) => {
    return(
        <div style={{flexDirection:props.dir==='ltr'?'row':'row-reverse'}} className='header'>
               {props.pic}
                <div style={{marginLeft:props.dir=='ltr'?'3vw':'0'}} className='header-div'>
                    <h2>{props.title}</h2>
                    <h4>{props.text}</h4>
                   {props.btn}
                </div>
                
            </div>
    )
}
export default TextAndPic;
