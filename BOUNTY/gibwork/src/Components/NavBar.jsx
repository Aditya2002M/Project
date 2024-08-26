import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from "framer-motion";
import { FaDiscord, FaTwitter, FaRegMoon } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { MdOutlineWbSunny } from "react-icons/md";
import logo from '../assets/gib.jpg';
import './NavBar.css';
import { SlideTabsExample } from './SideTabs';

function NavBar(props) {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setIsDarkMode(savedTheme === 'dark');
            document.body.classList.toggle('dark-mode', savedTheme === 'dark');
        }
    }, []);

    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);
        const newTheme = !isDarkMode ? 'dark' : 'light';
        document.body.classList.toggle('dark-mode', newTheme === 'dark');
        localStorage.setItem('theme', newTheme); 
    };

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <>
            <div>
                <motion.nav 
                initial={{opacity:0,y:-50}}
                animate={{opacity:1,y:0}}
                >
                    <div className="nav-start">
                        <motion.div
                        initial={{rotateX:0}}
                        transition={{duration:0.5}}
                        whileHover={{rotate:360}}
                        className='logo'>
                            <img src={logo} alt="Logo" />
                        </motion.div>
                    </div>
                    <SlideTabsExample />
                    <div className="nav-end">
                        <div className='icons'>
                            <motion.a
                            initial={{scale:1}}
                            whileHover={{scale:1.2}}
                            href="https://www.youtube.com/@gibwork_">
                                <CiYoutube />
                            </motion.a>
                            <motion.a
                            initial={{scale:1}}
                            whileHover={{scale:1.2}}
                             href="">
                                <FaDiscord />
                            </motion.a>
                            <motion.a
                            initial={{scale:1}}
                            whileHover={{scale:1.2}}
                             href="https://x.com/i/flow/login?redirect_after_login=%2Fgib_work">
                                <FaTwitter />
                            </motion.a>
                            <div className="mode" onClick={toggleTheme}>
                                {isDarkMode ? <FaRegMoon /> : <MdOutlineWbSunny />}
                            </div>
                        </div>
                        <button className='px-5 py-2 rounded-lg bg-[#7e22ce] text-white mr-4'>SignUp</button>
                    </div>
                </motion.nav>
            </div>
            <motion.div className="progress-bar" style={{ scaleX }}></motion.div>
        </>
    );
}

export default NavBar;
