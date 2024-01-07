import '../css/Navbar.css'
import ownerIcon from "../assets/410905424_661265039257258_2791917161732420042_n.jpg"
import githubIcon from '../assets/icons8-github-48 (1).png'
 
export default function Navbar(){
    return(<>
    <div className="navbar">
        <div className='navbarMailCont'>
            <a style={{textDecoration:"none"}} href="mailto:yaser-bahaa@hotmail.com">
        <p className='navbarMail'>yaser-bahaa@hotmail.com</p> 
            </a>
        </div>

            <div className='navbarTitleCont'>
                <p className='navbarTitleOwnerName'>Yaser!</p>
                <p className='navbarTitle'>Studio</p>
            </div>

           <div className='navbarIcons'>
            <a target="_blank" href="https://github.com/yaserbahaa">
            <img className='navbarIcon' src={githubIcon }alt="" />
            </a>
           </div>
    </div>
    </>)
}