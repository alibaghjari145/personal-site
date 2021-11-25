import React,{useState} from 'react'
import ContactBox from './contactBox'
import gmail from './../img/gmail.svg'
import linkedin from './../img/linkedin.svg'
import github from './../img/github.svg'
import skype from './../img/skype.svg'
import leetcode from './../img/leetcode.svg'
import dribbble from '../img/dribbble.svg'


const Contacts = (params) => {
    const [Pic, setPic] = useState([
    <img src={gmail} alt="gmail" />,
    <img src={skype} alt="gmail" />,
    <img src={linkedin} alt="gmail" />,
    <img src={github} alt="gmail" />,
    <img src={leetcode} alt="gmail" />,
    <img src={dribbble} alt="gmail" />])
    return(
        <div className='contacts content'>
            <ContactBox id='0' pic={Pic[0]} address='alibaghjari1121@gmail.com' 
            link='mailto:alibaghjari1121@gmail.com'
            />
                   <ContactBox id='1' pic={Pic[1]} address='ali baghjari' 
            link='https://join.skype.com/invite/NV3luW0v3IYY'
            />
                   <ContactBox id='2' pic={Pic[2]} address='ali baghjari' 
            link='https://www.linkedin.com/in/ali-baghjari-a17975195'
            />
                   <ContactBox id='3' pic={Pic[3]} address='alibaghjari145' 
            link='https://github.com/alibaghjari145'
            />
                   <ContactBox id='4' pic={Pic[4]} address='alibaghjari1121' 
            link='https://leetcode.com/alibaghjari1121/'
            />
                   <ContactBox id='5' pic={Pic[5]} address='alibaghjari' 
            link='https://dribbble.com/alibaghjari'
            />
            
        </div>
    )
}
export default Contacts