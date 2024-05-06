import React, { useRef, useState } from 'react';
import "./portfolio.scss"
import { motion, useInView, useScroll, useSpring, useTransform } from 'framer-motion';

const items=[
    {
        id: 1,
        title: "React Commerce",
        img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
      },
      {
        id: 2,
        title: "Next.js Blog",
        img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
      },
      {
        id: 3,
        title: "Vanilla JS App",
        img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
      },
      {
        id: 4,
        title: "Music App",
        img: "/music_image.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
      },


      {
        id: 5,
        title: "Weather App",
        img: "/city.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
      },

      {
        id: 6,
        title: "AI Prompt App ",
        img: "/ai_image.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
      },


      {
        id: 7,
        title: "Designer App",
        img: "/house_image.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
      },
]


const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;


const Single=({ item })=>{

    const ref= useRef();
    const {scrollYProgress}= useScroll({
        target:ref
    })

    // const isInView= useInView(ref, { margin: "-10px" })

    const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);



    const y= useTransform(scrollYProgress, [0, 1], [-300, 300])

    return (
      <section>
        <div className="container">
          <div className="wrapper">
            <motion.div
              className="imageContainer"
              initial={false}
              animate={
                isInView
                  ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                  : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
              }
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ twice: true }}
              onViewportEnter={() => setIsInView(true)}
            >
              <img
                src={item.img}
                alt="item"
                ref={ref}
                onLoad={() => setIsLoaded(true)}
              />
              {/* <img src={`/${id}.jpg`} alt="" onLoad={() => setIsLoaded(true)} /> */}
            </motion.div>

            <motion.div className="textContainer" style={{ y }}>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <button>See Demo</button>
            </motion.div>
          </div>
        </div>
      </section>
    );
}
const Portfolio = () => {

    const ref= useRef();
    const {scrollYProgress}= useScroll({
        target: ref,
        offset: ["start start", "end end"]
    })

    const scaleX=useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30
    })
  return (
    <div className='portfolio'>
        <div className='progress'>
            <h1>Featured Works</h1>
            <motion.div className='progressBar' style={{scaleX}}></motion.div>
        </div>
        {items.map((item)=>(
            <Single item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default Portfolio