import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import resume from '../files/ALI-BAGHJARI.pdf'
import dev from './../img/proud.svg'
import TextAndPic from './text&pic'

const Home = (params) => {
    const [Btn, setBtn] = useState( <Link to={resume} target="_blank" download>
    <button className='download-resume'>
       DownLoad my resume
    </button>
    </Link>)
    const [Pic, setPic] = useState(<img className='defPic' src={dev} alt="developer"/>)
    return (
        <div className='home content'>
           
            <TextAndPic 
            dir='ltr'
            pic={Pic}
            title='Hello!'
            text='This is my personal page that let you know more about me! 
            and you can download my resume from the button below'
            btn={Btn}
            />
        </div>
    )
}
export default Home