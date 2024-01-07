import '../css/Projects.css'
import ImageSlider from './ImageSlider';
import homeToplay from '../assets/lap-toplay/toplay-home.png'
import homeToplay2 from '../assets/lap-toplay/toplay-home2.jpg'
import profileToplay from '../assets/lap-toplay/toplay-profile.png'
import stoToplay from '../assets/lap-toplay/toplay-sto.png'
import uploadToplay from '../assets/lap-toplay/toplay-upload.png'

import homeToplayIpad from '../assets/ipad-toplay/home-ipad-toplay.jpg'
import homeToplay2Ipad from '../assets/ipad-toplay/home2-ipad-toplay.jpg'
import profileToplayIpad from '../assets/ipad-toplay/profile-ipad-toplay.jpg'
import stoToplayIpad from '../assets/ipad-toplay/sto-ipad-toplay.jpg'
import uploadToplayIpad from '../assets/ipad-toplay/upload-ipad-toplay.jpg'

import homeToplayPhone from '../assets/phone-toplay/home-phone-toplay.jpg'
import homeToplay2Phone from '../assets/phone-toplay/home2-phone-toplay.jpg'
import profileToplayPhone from '../assets/phone-toplay/profile-phone-toplay.jpg'
import stoToplayPhone from '../assets/phone-toplay/sto-phone-toplay.jpg'
import uploadToplayPhone from '../assets/phone-toplay/upload-phone-toplay.jpg'


export default function Projects(){
      const images = [
        homeToplay,
        homeToplay2,
        profileToplay,
        stoToplay,
        uploadToplay,
  ]; 
  const images2 = [
    homeToplayIpad,
    homeToplay2Ipad,
    profileToplayIpad,
    stoToplayIpad,
    uploadToplayIpad, 
]; 
const images3 = [
  homeToplayPhone,
  homeToplay2Phone,
  profileToplayPhone,
  stoToplayPhone,
  uploadToplayPhone, 
];
    return(<>
    <h1 className='projTitle'>PROJECT</h1>
    <div className="projCont">
        <div className='projImg1'>
        <ImageSlider images={images} images2={images2} images3={images3}/>
        </div>
        <div className='projAbout1'>
        <h1 className='projAbout1Title'>Toplay</h1>
        <h4 className='projAbout1Title_'>— Social Media Platform for Gamers</h4>
        <p className='projAbout1P'>Tailored for showcasing gaming prowess,<br /> <p style={{marginBottom: '5px',marginTop: '22px',lineHeight: '25px'}}>our platform enables gamers to seamlessly upload posts, clips, and more.</p>  <br/><p style={{marginBottom: '0px',marginTop: '0px',lineHeight: '25px'}}>Each user curates a distinctive profile, providing a glimpse into their unique gaming world.</p> <br /> <p style={{marginBottom: '0px',marginTop: '5px',lineHeight: '25px'}}> Forge connections by adding fellow gamers directly from their profiles, creating a dynamic community .</p> </p>
        <div className='projAbout1BtnCont'>
          <div className='projAbout1Btn1'><a target="_blank" style={{textDecoration:"none", color:"white"}} href="https://toplay.onrender.com/">Website</a></div>
          <div className='projAbout1Btn2'><a target="_blank" style={{textDecoration:"none", color:"white"}} href="https://github.com/yaserbahaa/toplay">Code</a> </div>
        </div>
        </div>
    </div>
    </>)
}