import React from 'react';
import { motion } from 'framer-motion'

function Hero(props) {
    return (
        <motion.div
        initial={{opacity:0,x:-150}}
        animate={{opacity:1,x:0}}
        className='hero-container mt-24 mb-16 w-[900px] '>
            <div className=' hover:cursor-pointer'>
                <motion.h1
                    initial={{ y: 0 }}
                    whileHover={{ y: 20 }}

                    className='text-[#1d4ed8] hover:bg-[#4ade80] font-extrabold uppercase text-[90px] leading-none
                relative block overflow-hidden whitespace-nowrap
                sm:text-7xl md:text-8xl'>A Landing page </motion.h1>
                <motion.h1
                    initial={{ y: 0 }}
                    whileHover={{ y: 20 }}
                    className='hover:bg-orange-400 font-extrabold uppercase text-[90px] leading-none
                relative block overflow-hidden whitespace-nowrap
                sm:text-7xl md:text-8xl
                '>Template For </motion.h1>
                <motion.h1
                    initial={{ y: 0 }}
                    whileHover={{ y: 20 }}
                    className='text-[#8b5cf6] hover:bg-[#d4d4d8] font-extrabold uppercase text-[90px] leading-none
                relative block overflow-hidden whitespace-nowrap
                sm:text-7xl md:text-8xl'> Gib.Work</motion.h1>
            </div>
            <div className='flex justify-start ml-6'>
                <motion.p
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.09 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className='mt-6 font-serif text-[#334155]'>Build beautiful Landing page for Gib.Work Using React,Tailwind <br />
                    Framer-Motion For Animation. </motion.p>
            </div>

            <div className="btn mt-7 flex space-x-14">
                <motion.button
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.09 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 ,duration:0.02}}
                    className='bg-[#8b5cf6] text-white px-9 py-2'>build More</motion.button>
                <motion.a
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.09 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 ,duration:0.02}}
                 className='text-sm px-6 py-2 bg-[#3b82f6] text-white rounded-lg' href="#">Learn More</motion.a>
            </div>

        </motion.div>
    );
}

export default Hero;