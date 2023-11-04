import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Sidebar = () => {

    const [menuVisible, setMenuVisible] = useState(false);

    // const toggleMenu = () => {
    //     setMenuVisible(!menuVisible);
    // };
    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
        if (!menuVisible) {
            document.body.classList.add('no-scroll'); // Disable scrolling
        } else {
            document.body.classList.remove('no-scroll'); // Enable scrolling
        }
    };

    return (
        <>
            {/* Desktop Navbar */}

            <div className="hidden md:flex flex-col w-fit md:h-[100vh] px-10 py-5 items-center justify-between border border-l-2 sticky top-0 ">
                {menuVisible && (
                    <div className='overlay'></div>
                )}
                <button
                    className='rotate-90 font-bold'
                    onClick={toggleMenu} >|||</button>
                {menuVisible && (
                    <>
                        <div
                            className="absolute z-10 top-0 right-0 left-0 h-[100vh] w-fit bg-white border py-9 transition-all flex items-center justify-center mr-10 "
                        >
                            <button className='text-xl font-bold absolute top-[20px] left-[30px]' onClick={toggleMenu}>X</button>
                            {/* Your menu content goes here */}
                            <ul className='flex items-start flex-col gap-5 w-[500px] px-10 text-[40px] font-bold ' >
                                <Link to="/" className='hover:text-green-500'>Home</Link>
                                <Link to="/" className='hover:text-green-500'>How Does It Work</Link>
                                <Link to="/" className='hover:text-green-500'>About</Link>
                                <Link to="/" className='hover:text-green-500'>Contact</Link>
                                <Link to="/register" className='hover:text-green-500'>Register</Link>
                            </ul>
                        </div>
                    </>
                )}
                <div className='flex-col h-fit text-center mb-10' >
                    <p>P</p>
                    <p>R</p>
                    <p>O</p>
                    <p>J</p>
                    <p>E</p>
                    <p>C</p>
                    <p>T</p>
                    <p className='text-transparent' >_</p>
                    <p>M</p>
                    <p>A</p>
                    <p>N</p>
                    <p>A</p>
                    <p>G</p>
                    <p>E</p>
                    <p>R</p>
                </div>
            </div>

            {/* mobile view */}
            <div className='bg-white flex justify-between px-[20px] py-[20px] md:hidden'>
                <button
                    className={`rotate-90 transition-all`}
                    onClick={toggleMenu}
                >
                    |||
                </button>
                {menuVisible && (
                    <div className={`overlay`}></div>
                )}
                {menuVisible && (
                    <div className={`duration-300 top-0 absolute h-[100vh] w-fit bg-white border py-10 transition-all flex items-center justify-center ${menuVisible ? 'left-0' : 'left-[-100%]'}`}>
                        <button className='text-xl absolute top-[20px] left-[20px]' onClick={toggleMenu}>X</button>
                        <ul className='flex justify-center items-start flex-col gap-5 w-[400px] px-10 text-3xl font-bold'>
                            <Link to="/" className='hover:text-green-500'>Home</Link>
                            <Link to="/" className='hover:text-green-500'>About</Link>
                            <Link to="/" className='hover:text-green-500'>How Does It Work</Link>
                            <Link to="/" className='hover:text-green-500'>Contact</Link>
                            <Link to="/register" className='hover:text-green-500'>Register</Link>
                        </ul>
                    </div>
                )}
                <div>
                    PROJECT SHARING
                    <Link to="/login" className='bg-yellow-400/[50%] p-2 rounded-2xl mx-4 font-semibold' >LOGIN</Link>
                </div>
            </div>

        </>
    )
}

export default Sidebar
