import { useState, useEffect } from "react";
import {isDarkThemeOn} from "../thememodal"
import { useStore } from '@nanostores/react';
import { IoIosCloudyNight } from "react-icons/io";
import {GiHamburgerMenu} from "react-icons/gi"
import {GrClose} from "react-icons/gr"

import '@fontsource/kanit';


export default function NavBar(){

    const $isDark = useStore(isDarkThemeOn);

    //768px
    const [isMobile, setIsMobile] = useState(false);
    const [isMenuOn, setisMenuOn] = useState(false);

    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth < 1060); // Adjust the breakpoint as needed
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    return(
        <div >    
            <section className="bg-white dark:bg-zinc-700 p-10 flex justify-between align-middle font-lato font-light mx-20">
                <div>
                    <label className="font-light text-4xl" style={{fontFamily:'kanit'}}>ASTRAM</label>       
                </div>
                {!isMobile ? 
                <div className="flex justify-center">
                    <div className="flex gap-10 align-middle">
                        <label className='p-3 rounded-xl hover:bg-zinc-800 transition-all hover:text-white'>Services</label>
                        <label className='p-3 rounded-xl hover:bg-zinc-800 transition-all hover:text-white'>About</label>
                        <label className='p-3 rounded-xl hover:bg-zinc-800 transition-all hover:text-white'>Contact</label>
                    </div>
                    <div className="flex gap-2 ml-20">
                        <label className='p-3 bg-zinc-800 rounded-lg text-white'>Sign In</label>
                        <label className='p-3 border border-zinc-800 rounded-xl'>Log In</label>
                        <div onClick={() => isDarkThemeOn.set(!$isDark)}>
                            <IoIosCloudyNight className="text-3xl ml-20"/>
                        </div>
                    </div>
                </div>
                : <div onClick={() => {setisMenuOn(!isMenuOn)}} className="z-50">
                    {!isMenuOn ? 
                    <GiHamburgerMenu className="text-3xl"/>
                    : <GrClose className="text-3xl"/>
                    }
                </div>}

                {isMobile && isMenuOn && (
                    <div className="fixed bg-white bottom-0 left-0 w-full h-screen flex justify-center items-center">
                        <div className="flex flex-col gap-10 align-middle text-center text-xl">
                            <label className='p-3'>Services</label>
                            <label className='p-3'>About</label>
                            <label className='p-3'>Contact</label>
                        </div>
                    </div>
                )}

            </section>   
        </div>
        );
}