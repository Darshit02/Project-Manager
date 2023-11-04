import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <>
            <div className='flex flex-col w-full  ' >
                <div className='flex items-center justify-center text-justify gradient w-full p-20 h-[70vh] ' >
                {/* log-in button */}
                <Link to="/login" className='hidden md:block absolute top-12 right-14 bg-yellow-300 p-2 rounded-2xl mx-4 font-semibold drop-shadow-lg' >LOGIN <>icon</></Link>
                {/* top hero section  */}
                    <div className='' >
                        <p className='text-lg font-semibold p-1' >With help of Our Platform</p>
                        <h1 className='md:text-[5rem] font-extrabold p-1 text-[2.5rem]' ><span>Gain & </span>Share Knowledge</h1>
                    </div>
                </div>
                {/* two part section */}
                <div className='flex md:flex-row flex-col w-full ' >
                    <div className='p-10 bg-blue-500  font-medium  md:w-[50%] w-full ' >
                        <h2 className='text-2xl mb-2 ' >Why Choose (project name) ?</h2>
                        <p className='w-[80%] text-gray-600 text-xl '>In our Website you can add your project that was made with a brilliant idea and share it with other people who can get inspiration and create even more brilliant idea </p>
                        <button className='rounded-md border border-white p-2 my-4' >Get Stared</button>
                    </div>
                    <div className=' flex flex-wrap text-2xl font-bold text-center md:w-[50%] w-full h-[300px] md:h-auto items-center justify-center bg-gray-700 text-white'>
                        <div className='flex-col text-center p-5' >
                            <span>10K +</span>
                            <p>Users</p>
                        </div>
                        <div className='flex-col text-center p-5' >
                            <span>5K +</span>
                            <p>Collages</p>
                        </div>
                        <div className='flex-col text-center p-5' >
                            <span>6K +</span>
                            <p>Mentors</p>
                        </div>
                        <div className='flex-col text-center p-5' >
                            <span>15 +</span>
                            <p>States</p>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Hero
