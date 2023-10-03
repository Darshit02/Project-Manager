import React, { useState } from 'react'

const Sidebar = () => {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };
    return (
        <>
            {/* Desktop Navbar */}
            <div className="flex flex-col w-fit md:h-[100vh] px-10 py-5 items-center justify-between border border-l-2 sticky top-0 ">
                <button
                    className='rotate-90'
                    onClick={toggleMenu} >|||</button>
                {menuVisible && (
                    <div 
                    className="absolute top-0 right-0 left-[5.9rem] h-[100vh] w-fit bg-white border py-9 transition-all flex items-center justify-center mr-10 "
                    >
                        {/* Your menu content goes here */}
                        <ul className='flex flex-col gap-5 w-fit px-10 text-xl font-bold ' >
                            <li className='hover:text-green-500' >Login</li>
                            <li className='hover:text-green-500'>Register</li>
                            <li className='hover:text-green-500'>About</li>
                            <li className='hover:text-green-500'>Contact</li>
                        </ul>
                    </div>
                )}
                <div className='flex-col h-fit text-center mb-10' >
                    <p>P</p>
                    <p>R</p>
                    <p>O</p>
                    <p>J</p>
                    <p>E</p>
                    <p>C</p>
                    <p>T</p>
                    <p className='text-white' >_</p>
                    <p>M</p>
                    <p>A</p>
                    <p>N</p>
                    <p>A</p>
                    <p>G</p>
                    <p>E</p>
                    <p>R</p>
                </div>


            </div>

        </>
    )
}

export default Sidebar
