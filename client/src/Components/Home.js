import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-col px-12 md:mx-36 custom-dashed-border  items-start justify-start pt-36  text-3xl font-semibold text-[#707581] c-font'>
        <h1 className='w-full'>
        <span className='mb-4 inline-block'><span className='text-5xl'>😀</span> Hello there! I’m <span className='text-black'>Aman,</span></span>  <br></br>  a <span className='text-black'>web developer</span> constantly growing <br></br> my skills to create innovative and <br></br> user-friendly digital experiences. <br></br> <span className='mt-4 inline-block'><span className='text-black'>Let’s collaborate and turn your <br></br> ideas into reality!</span></span> 
        <br></br>
        <span className='text-2xl'>Some people call me gyo.</span>
        </h1>

        <div className='flex flex-row text-base py-2 pb-20  space-x-4 font-medium'>
            <button className='bg-gray-900 p-1 rounded-lg border-2 border-gray-400 text-white'>
                Reach Out
            </button>
            <button className='text-gray-800 border rounded-lg border-gray-800 p-1'>
                Check Resume
            </button>
        </div>
        
    </div>
  )
}

export default Home