import { faAddressCard, faHome, faListOl, faPhoneAlt, faTools } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React,{useEffect, useState} from 'react'
import { NavLink, Link } from 'react-router-dom'
import me from '../img/me.jpg'

const Navbar = () => {
    const [url, setUrl] = useState('')
    let myUrl = window.location.href;
    const width = window.innerWidth;
    useEffect(() => {
        myUrl = window.location.href;
       
    })
    if(width>576){
        return (
            <div  className='navbar ' style={{width:width>768?'20vw':'25vw'}}>
                <img style={{visibility:width>992?'visible':'hidden'}} src={me} alt="ali baghjari" />
                <div className="navlinkBox">
                    <Link  className={`navlink ${myUrl.endsWith('/home')?'activeNavlink':'disactive'}`} to='/home'>
                        <FontAwesomeIcon className='navbar-icon' icon={faHome} />
                        Home
                    </Link>
                    <NavLink  className={`navlink ${myUrl.endsWith('/about')?'activeNavlink':'disactive'}`} to='/about'>
                        <FontAwesomeIcon className='navbar-icon' icon={faAddressCard} />
                        About
                    </NavLink>
                    <NavLink className={`navlink ${myUrl.endsWith('/skills')?'activeNavlink':'disactive'}`} to='/skills'>
                        <FontAwesomeIcon className='navbar-icon' icon={faTools} />
                        Skills
                    </NavLink>
                    <NavLink className={`navlink ${myUrl.endsWith('/experiences')?'activeNavlink':'disactive'}`} to='/experiences'>
                        <FontAwesomeIcon className='navbar-icon' icon={faListOl} />
                        Experiences
                    </NavLink>
                    <NavLink className={`navlink ${myUrl.endsWith('/contacts')?'activeNavlink':'disactive'}`} to='/contacts'>
                        <FontAwesomeIcon className='navbar-icon' icon={faPhoneAlt} />
                        Contact
                    </NavLink>
                </div>
    
            </div>
        )
    }
    else{
        return (
            <div className="small-navbar">
                <div className="navlinkBox-small">
                    <NavLink style={{left:'5vw'}}  className={`navlink ${myUrl.endsWith('/home')?'activeNavlink':'disactive'}`} to='/home'>
                        <FontAwesomeIcon className='navbar-icon' icon={faHome} />
                    </NavLink>
                    <NavLink style={{left:'25vw'}}  className={`navlink ${myUrl.endsWith('/about')?'activeNavlink':'disactive'}`} to='/about'>
                        <FontAwesomeIcon className='navbar-icon' icon={faAddressCard} />
                    </NavLink>
                    <NavLink style={{left:'45vw'}} className={`navlink ${myUrl.endsWith('/skills')?'activeNavlink':'disactive'}`} to='/skills'>
                        <FontAwesomeIcon className='navbar-icon' icon={faTools} />
                    </NavLink>
                    <NavLink style={{left:'65vw'}} className={`navlink ${myUrl.endsWith('/experiences')?'activeNavlink':'disactive'}`} to='/experiences'>
                        <FontAwesomeIcon className='navbar-icon' icon={faListOl} />
                    </NavLink>
                    <NavLink style={{left:'83vw'}} className={`navlink ${myUrl.endsWith('/contacts')?'activeNavlink':'disactive'}`} to='/contacts'>
                        <FontAwesomeIcon className='navbar-icon' icon={faPhoneAlt} />
                    </NavLink>
                </div>
            </div>
        )
    }
    
}

export default Navbar;