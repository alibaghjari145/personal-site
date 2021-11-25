import { faAddressCard, faHome, faListOl, faPhoneAlt, faTools } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NavLink } from 'react-router-dom'
import me from '../img/me.jpg'

const Navbar = () => {
    const width = window.innerWidth;
    if(width>576){
        return (
            <div className='navbar' style={{width:width>768?'20vw':'25vw'}}>
                <img style={{visibility:width>992?'visible':'hidden'}} src={me} alt="ali baghjari" />
                <div className="navlinkBox">
                    <NavLink strict className='navlink' to='/'>
                        <FontAwesomeIcon className='navbar-icon' icon={faHome} />
                        Home
                    </NavLink>
                    <NavLink strict className='navlink' to='/about'>
                        <FontAwesomeIcon className='navbar-icon' icon={faAddressCard} />
                        About
                    </NavLink>
                    <NavLink className='navlink' to='/skills'>
                        <FontAwesomeIcon className='navbar-icon' icon={faTools} />
                        Skills
                    </NavLink>
                    <NavLink className='navlink' to='/experiences'>
                        <FontAwesomeIcon className='navbar-icon' icon={faListOl} />
                        Experiences
                    </NavLink>
                    <NavLink className='navlink' to='/contacts'>
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
                    <NavLink style={{left:'5vw'}} strict className='navlink' to='/'>
                        <FontAwesomeIcon className='navbar-icon' icon={faHome} />
                    </NavLink>
                    <NavLink style={{left:'25vw'}} strict className='navlink' to='/about'>
                        <FontAwesomeIcon className='navbar-icon' icon={faAddressCard} />
                    </NavLink>
                    <NavLink style={{left:'45vw'}} className='navlink' to='/skills'>
                        <FontAwesomeIcon className='navbar-icon' icon={faTools} />
                    </NavLink>
                    <NavLink style={{left:'65vw'}} className='navlink' to='/experiences'>
                        <FontAwesomeIcon className='navbar-icon' icon={faListOl} />
                    </NavLink>
                    <NavLink style={{left:'83vw'}} className='navlink' to='/contacts'>
                        <FontAwesomeIcon className='navbar-icon' icon={faPhoneAlt} />
                    </NavLink>
                </div>
            </div>
        )
    }
    
}

export default Navbar;