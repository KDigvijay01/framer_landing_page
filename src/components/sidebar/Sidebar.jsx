import React, { useState } from 'react';
import "./sidebar.scss"
import Links from './links/Links'
import ToggleButtons from './toggleButtons/ToggleButtons'
import { motion, useAnimate } from 'framer-motion';



const variants={
    open:{
        clipPath: "circle(1200px at 50px 50px)",
            transition: {
                type: "spring",
                stiffness: 20,
                restDelta: 2
              }
    },
    closed:{
        clipPath: "circle(30px at 50px 50px)",
        transition:{
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
}

const Sidebar = () => {

    const [open, setOpen]= useState(false);

  


  return (

    <motion.div className='sidebar' initial={false} animate={!open ? "closed" : "open"} >
        <motion.div className='bg' variants={variants}>
            <Links/>
        </motion.div>
        <ToggleButtons changeOpen={(val)=>setOpen(val)} open={open}/>
    </motion.div>
  )
}

export default Sidebar