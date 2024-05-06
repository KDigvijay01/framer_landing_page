import React, { useRef } from "react";
import "./services.scss";
import { motion, useInView, AnimatePresence, easeInOut, easeIn } from "framer-motion";
import AnimateText from "./animeText/AnimateText";

const variants = {
  initial: {
    x: -300,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      easeInOut:10,
      staggerChildren: 0.1,
      type: "spring",
      stiffness: 50, 
      damping:10
    },
  },
};

const charVariants={
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay:0.5, 
      staggerChildren:0.05,
      type: "spring",
      stiffness: 50, 
      damping:10
    },
  },
}

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      animate="animate"
      ref={ref}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>

      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="people" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> 
            <AnimateText delay={1}/>
          </h1>
        </div>

        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>

      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>

          <motion.p initial="initial" animate="animate">
          {(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur expedita magni eius ex corrupti
            animi! Ad nam pariatur assumenda quae mollitia libero repellat
            explicabo maiores?`).split("").map((ch, i)=>(
            <motion.span key={i} variants={charVariants}>{ch}</motion.span>
          ))}

          </motion.p>

          <button>Go</button>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Development</h2>
          <motion.p initial="initial" animate="animate">
          {(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur expedita magni eius ex corrupti
            animi! Ad nam pariatur assumenda quae mollitia libero repellat
            explicabo maiores?`).split("").map((ch, i)=>(
            <motion.span variants={charVariants} key={i}>{ch}</motion.span>
          ))}

          </motion.p>

          <button>Go</button>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Business</h2>
          <motion.p initial="initial" animate="animate">
          {(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur expedita magni eius ex corrupti
            animi! Ad nam pariatur assumenda quae mollitia libero repellat
            explicabo maiores?`).split("").map((ch, i)=>(
            <motion.span variants={charVariants} key={i}>{ch}</motion.span>
          ))}

          </motion.p>

          <button>Go</button>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Security</h2>
          <motion.p  initial="initial" animate="animate">
          {(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur expedita magni eius ex corrupti
            animi! Ad nam pariatur assumenda quae mollitia libero repellat
            explicabo maiores?`).split("").map((ch, i)=>(
            <motion.span variants={charVariants} key={i}>{ch}</motion.span>
          ))}

          </motion.p>

          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
