import '../css/Projects.css'
import ImageSlider from './ImageSlider';


export default function Projects(){
      const images = [
    'http://localhost:5173/src/assets/toplay-home.png',
    'http://localhost:5173/src/assets/toplay-home2.jpg',
    'http://localhost:5173/src/assets/toplay-profile.png',
    'http://localhost:5173/src/assets/toplay-sto.png',
    'http://localhost:5173/src/assets/toplay-upload.png',
    // Add more image URLs as needed
  ]; 
    return(<>
    <h1 className='projTitle'>PROJECT</h1>
    <div className="projCont">
        <div className='projImg1'>
        <ImageSlider images={images} />
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