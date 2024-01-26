import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='col-span-2 my-4'>
                <h1 className='md:text-5xl sm:text-3xl text-2xl font-bold py-2'>Do you want to get new updates ?</h1>
                <p className='pt-3'>Subscribe for free to get new offers and details</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input className='p-2 flex w-full rounded-md text-black' type="email" placeholder='Enter E-Mail'/>
                    <button className='bg-[#00df9a] rounded-md w-[150px] font-medium ml-4 my-6 mx-auto py-2 text-black'>Notify Me</button>
                </div>
                <p>we are caring about your data and privacy. check our <span className='text-[#00df9a]'>Privacy Policy.</span></p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter