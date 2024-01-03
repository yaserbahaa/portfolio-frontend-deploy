import '../css/intr.css'
import ownerImg from '../assets/410905424_661265039257258_2791917161732420042_n.jpg'
import html from '../assets/html.svg'
import css from '../assets/css.svg'
import js from '../assets/js.svg'
import react from '../assets/react.svg'
import express from '../assets/express.svg'
import node from '../assets/node.svg'
import mongodb from '../assets/mongodb.svg'


export default function Intr(){
    return(<>
    <div className="intrAboutCont">
        <div className='intrAbout_'>

        <h1 className="intrAbout">Full Stack Web <br/>Developer
</h1>
<p className='intrAboutText'>Hi, I'm Yaser Bahaa. Full stack Web Developer <br/>based in Cairo, Egypt. 📍</p>
        </div>
    <div className='intrOwnerImgCont'>
        <img className='intrOwnerImg' src={ownerImg} alt="" />
    </div>
    </div>


    <div className='tecCont'>
     <h4 className='tecTitle'>Tech Stack</h4>
     <img src={html} alt="" /> 
     <img src={css} alt="" /> 
     <img src={js} alt="" /> 
     <img src={react} alt="" /> 
     <img src={express} alt="" /> 
     <img src={node} alt="" /> 
     <img src={mongodb} alt="" /> 

    </div>
    </>)
}