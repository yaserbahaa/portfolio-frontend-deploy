import '../css/ContactMe.css'
import mail from '../assets/icons8-mail-48.png'
import linked from '../assets/icons8-linkedin-48.png'

export default function ContentMe(){
    return(<>
        <div className='ContactMeCont'>

        <h1 className='ContactMeTitle'>CONTACT ME</h1>
        <div className='ContactMeLinkedCont'>
            <a target="_blank" href="https://linkedin.com/in/yaser-bahaa-a707b22a8/">
            <img src={linked} alt="" />
            </a>
        <a className='ContactMeLinked' target="_blank" href="https://linkedin.com/in/yaser-bahaa-a707b22a8/s">LinkedIn</a>
        </div>
        <div className='ContactMeMailCont'>
            <a href="mailto:yaser-bahaa@hotmail.com">
        <img src={mail} alt="" />
            </a>
        <a className='ContactMeMail' target="_blank" href="mailto:yaser-bahaa@hotmail.com">yaser-bahaa@hotmail.com</a>
        </div>
    </div>
</>)
}