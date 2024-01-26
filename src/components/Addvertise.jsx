import React from 'react'
import report from '../assets/report.jpg'

const Addvertise = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={report} alt="" />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold text-2xl'>Make your path easier with joining us</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl py-4 text-black uppercase font-bold'>Best solution for Reports</h1>
                <p className='font-medium py-1 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quos minus quasi tempora quia quaerat distinctio quam officiis, consectetur soluta, ratione, dolor pariatur. Aliquam consequatur maiores, ipsa qui cumque vitae?</p>
                <button className='bg-black rounded-md w-[150px] font-medium my-6 mx-0 px-8 py-2 text-[#00df9a]'>Start Now</button>
            </div>
        </div>
    </div>
  )
}

export default Addvertise