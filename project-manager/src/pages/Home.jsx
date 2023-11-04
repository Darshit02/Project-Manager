import React from 'react'
import Sidebar from '../components/Navbar'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <>
      <div className='flex md:flex-row flex-col' >
      {/* navbar */}
        <Sidebar />
        <div>
          <Hero />
          {/* little intro */}
          <div className='px-5 py-7' >
            <h2 className='text-2xl font-semibold' >Become A Inventor and Build Project</h2>
            <p className='py-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus iure suscipit voluptates magnam deleniti, culpa cum placeat debitis voluptatum explicabo provident illum voluptatibus, obcaecati expedita. Quos eveniet asperiores recusandae voluptate?Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <p className='py-1' > Aliquam eum impedit ea praesentium aliquid ad. Voluptatem possimus, error explicabo tempora consectetur eius tempore sapiente quam iusto harum cum incidunt inventore.</p>
            <button className='bg-yellow-300 rounded-md py-2 px-5 my-2' >View All Projects list</button>
          </div>
          {/*  */}
        </div>
      </div>

    </>
  )
}

export default Home
