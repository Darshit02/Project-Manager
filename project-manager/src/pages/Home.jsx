import React from 'react'
import Sidebar from '../components/Sidebar'
import Hero from '../components/Hero'
import ProjectCard from '../components/ProjectCard'

const Home = () => {
  return (
    <>
      <div className='flex flex-row' >
        <Sidebar />
        <div>
          <Hero />
          {/* project for show */}
          <div className='flex w-full justify-between items-center' >
            <h2 className='text-2xl font-semibold pt-5 px-5' >Projects</h2>
            <button className='w-[200px] text-center bg-blue-500 rounded-lg p-1' >View All</button>
          </div>
          <div className='flex flex-wrap gap-4 mt-4 justify-evenly m-4'>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>
      </div>

    </>
  )
}

export default Home
