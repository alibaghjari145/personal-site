import React from 'react'


const ContactBox = (props) => {
    return (
        <div style={{ animationDelay: `${props.id * .4}s` }} className='contact-box'>
            {props.pic}
            <h3>{props.address}</h3>
                <a href={props.link} target="_blank" >
                    <button>Click me</button>
                </a>
        </div>
    )
}


export default ContactBox
