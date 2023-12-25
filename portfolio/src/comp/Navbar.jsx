import '../css/Navbar.css'
import ownerIcon from "../assets/410905424_661265039257258_2791917161732420042_n.jpg"
import githubIcon from '../assets/icons8-github-48 (1).png'

export default function Navbar(){
    return(<>
    <div className="navbar">
        <div className='navbarAvalbleCont'>
            <div className='navbarAvalbleContchild'>
                <div className='navbarAvalibleIcon'>
                </div>
            </div>
            <p className='navbarAvalible'>AVAILABLE NOW!</p>
        </div>

            <div className='navbarTitleCont'>
                <p className='navbarTitleOwnerName'>Yaser!</p>
                <p className='navbarTitle'>Studio</p>
            </div>

           <div className='navbarIcons'>
            <img className='navbarIcon' src={githubIcon }alt="" />
           </div>
    </div>
    </>)
}