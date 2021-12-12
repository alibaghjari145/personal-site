import React from 'react'
import { useState, useEffect } from 'react'

const SkillBox = (props) => {
    const delay = props.id*.3
    const width = window.innerWidth;
    return (
        <div key={props.id} style={{ borderColor: props.color , animationDelay:`${delay}s`}} className='skill-box'>
            {props.children}
            <div className='skill-text'>
                <h3 style={{ visibility: width > 768 ? 'visible' : 'hidden' }}>
                    {props.title}
                </h3>
                <div className="skill-line-out">
                   <div style={{width:`${props.pers}%`,height:'100%'}} >
                   <div style={{ backgroundColor: props.color,animationDelay:`${delay+.2}s`}} className="skill-line">
                    </div>
                   </div>
                </div>
                <h4>{props.pers}%</h4>
            </div>

        </div>)
}

export default SkillBox;