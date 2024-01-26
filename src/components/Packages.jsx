import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Packages = () => {
  return (
    <div className='w-full py-[10rem] bg-white px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8' >
            <div className='w-[90%] mx-auto shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="" />
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-center text-4xl font-bold'>$130</p>
                <div className='text-center font-medium '>
                   <p className='border-b mx-8 py-2 mt-8 border-t'>500GB Storage</p>
                   <p className='border-b mx-8 py-2'>upside down</p>
                   <p className='border-b mx-8 py-2'>SLIIT</p>
                </div>
                <button className='bg-[#00df9a] rounded-md w-[150px] font-medium my-6 mx-auto px-8 py-2 text-black'>Free Trial</button>
            </div>
            <div className='w-[90%] mx-auto bg-gray-100 border shadow-xl flex flex-col p-4 md:my-0 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="" />
                <h2 className='text-2xl font-bold text-center py-8'>Double</h2>
                <p className='text-center text-4xl font-bold'>$220</p>
                <div className='text-center font-medium '>
                   <p className='border-b mx-8 py-2 mt-8 border-t'>2TB Storage</p>
                   <p className='border-b mx-8 py-2'>Anytime rotate</p>
                   <p className='border-b mx-8 py-2'>SLIIT</p>
                </div>
                <button className='text-[#00df9a] rounded-md w-[150px] font-medium my-6 mx-auto px-8 py-2 bg-black'>Free Trial</button>
            </div>
            <div className='w-[90%] mx-auto shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-60px] bg-white' src={Triple} alt="" />
                <h2 className='text-2xl font-bold text-center py-8'>Family</h2>
                <p className='text-center text-4xl font-bold'>$300</p>
                <div className='text-center font-medium '>
                   <p className='border-b mx-8 py-2 mt-8 border-t'>Unlimited Storage</p>
                   <p className='border-b mx-8 py-2'>Unlimited Rotation</p>
                   <p className='border-b mx-8 py-2'>SLIIT</p>
                </div>
                <button className='bg-[#00df9a] rounded-md w-[150px] font-medium my-6 mx-auto px-8 py-2 text-black'>Free Trial</button>
            </div>
        </div>
    </div>
  )
}

export default Packages