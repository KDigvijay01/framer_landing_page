import React from 'react';
import "./navbar.scss";
import {motion} from "framer-motion";
import Sidebar from '../sidebar/Sidebar';

const Navbar = () => {
  return (
    <div className='navbar'>
        {/* Sidebar */}
        <Sidebar/>
        <div className='wrapper'>
            <motion.span initial={{opacity: 0, scale: 0.5}} animate={{opacity: 1, scale: 1}} transition={{duration: 0.5}}>Developer</motion.span>
            <div className='social'>
                <motion.a href="#"
                  whileHover={{scale: 1.4}}
                  whileTap={{scale: 0.95}}
                ><img src="/facebook.png" alt="facebook" /></motion.a>
                <motion.a href="#"
                 whileHover={{scale: 1.4}}
                  whileTap={{scale: 0.95}}
                ><img src="/instagram.png" alt="instagram" /></motion.a>
                <motion.a href="#"
                 whileHover={{scale: 1.4}}
                  whileTap={{scale: 0.95}}
                ><img src="/youtube.png" alt="youtube" /></motion.a>
                <motion.a href="#"
                 whileHover={{scale: 1.4}}
                  whileTap={{scale: 0.95}}
                ><img src="/dribbble.png" alt="dribble" /></motion.a>
            </div>
        </div>
    </div>
  )
}

export default Navbar