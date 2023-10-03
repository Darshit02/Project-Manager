import React from 'react'

const ProjectCard = () => {
  return (
    <>
    <div className='bg-gray-100 p-4 border rounded-lg' >
        <h1 className='text-lg' >Project Title</h1>
        <span className='italic' >#technologies</span>
        <p className='line-clamp-2 w-[300px] mt-2 ' >project description</p>
        <button className='rounded-md bg-blue-500 p-1 mt-3' >Know More</button>
    </div>
      
    </>
  )
}

export default ProjectCard
