import React, { useState, useEffect } from 'react'
import Typist from 'react-typist';

const TextAndPic = (props) => {
 
    return (
        <div style={{ flexDirection: props.dir === 'ltr' ? 'row' : 'row-reverse' }} className='header'>
            {props.pic}
            <div style={{ marginLeft: props.dir == 'ltr' ? '3vw' : '0' }} className='header-div'>
                <h2>
                    <Typist avgTypingDelay={120} className='my-title' >
                        {props.title}
                    </Typist>
                </h2>
                <h4>
                    <Typist avgTypingDelay={40} startDelay={1000}>
                        {props.text}
                    </Typist>
                </h4>
                {props.btn}
            </div>

        </div>
    )
}
export default TextAndPic;
