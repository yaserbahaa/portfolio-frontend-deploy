import '../css/ContactMe.css'
import mail from '../assets/icons8-mail-48.png'
import linked from '../assets/icons8-linkedin-48.png'

export default function ContentMe(){
    return(<>
        <div className='ContactMeCont'>

        <h1 className='ContactMeTitle'>CONTACT ME</h1>
        <div className='ContactMeLinkedCont'>
            <img src={linked} alt="" />
        <a className='ContactMeLinked' href="">LinkedIn</a>
        </div>
        <div className='ContactMeMailCont'>
        <img src={mail} alt="" />
        <a className='ContactMeMail' href="mailto:yaser-bahaa@hotmail.com">yaser-bahaa@hotmail.com</a>
        </div>
    </div>
</>)
}