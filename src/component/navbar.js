import React ,{useState} from 'react'
import logo from "../assets/logo.png"
import {FaBars,FaTimes,FaGithub,FaLinkedin} from "react-icons/fa"

const Navbar = () => {
const [nav, setnav] = useState(false)
function handalclick() {
  setnav(!nav)
}
  return (
  
        <div className="fixed w-full h-[80px] display: flex text-white justify-between bg-black px-4 items-center text-grey-300">
          <div>
            <img src={logo} alt="logo imges" style={{width: '50px'}}/>
          </div>
            <ul className='hidden md:flex'>
              <li>Home</li>
              <li>about</li>
              <li>skills</li>
              <li>work</li>
              <li>contact</li>
              <li></li>

            </ul>

          {/* {togal} */}

          <div onClick={handalclick} className="md:hidden z-10">
            {!nav ?<FaBars/>:<FaTimes/>}
          </div>
          {/* {mobile Menu} */}
          <div className={!nav ? "hidden": "absolute top-0 left-0 w-full  h-screen bg-black flex flex-col justify-center items-center"}>
          <ul>
              <li className='py-6 text-4xl'>Home</li>
              <li className='py-6 text-4xl'>about</li>
              <li className='py-6 text-4xl'>skills</li>
              <li className='py-6 text-4xl'>work</li>
              <li className='py-6 text-4xl'>contact</li>
              <li className='py-6 text-4xl'></li>

            </ul>
          </div>

          <div className='hidden'></div>
        </div>
 
  )
}

export default Navbar