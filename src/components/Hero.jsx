import React from 'react'
import { ReactTyped } from 'react-typed'

const Hero = () => {
  return (
    <div className='text-white '>
        <div className='max-w-[1000px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            {/* <p className=' font-bald p-2'>This website is created by the an idiot</p> */}
            <h1 className='text-[#00df9a] text-6xl sm:text-6xl font-bold md:py-6'>Welcome to the idiot Room</h1>
            <div>
                <p className='md:text-5xl sm:text-4xl text-5xl font-bold'>proudly presents by </p>
            </div>
            <ReactTyped className='md:text-4xl sm:text-3xl text-xl font-bold text-gray-600 p-3' 
                strings={['Anjana Prabhath','AJ']} 
                typeSpeed={120} 
                backSpeed={130} 
                loop />
            <div>
                <p className='pt-8 md:text-2xl text-xl text-gray-500 font-bold'>Every time you read this website, you should feel that you are a super idiot</p>
            </div>

            <button className='bg-[#00df9a] rounded-md w-[150px] font-medium my-6 mx-auto px-8 py-2 text-black'>Get Started</button>
        </div> 
    </div>
  )
}

export default Hero