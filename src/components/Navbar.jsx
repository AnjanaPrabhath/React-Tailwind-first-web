import React,{useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='flex justify-between items-center h-18 max-w[1240px] mx-auto px-4 text-white border-b border-b-green-950'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>3IDIOTS</h1>
        <ul className='hidden md:flex'>
            <li className='p-4'>Home</li>
            <li className='p-4'>Company</li>
            <li className='p-4'>Research</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Contact</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <h1 className='w-full px-4 text-3xl font-bold text-[#00df9a] mt-8'>IDIOT</h1>
            <ul className='pt-6 uppercase'>
                <li className='p-4 border-b border-gray-700'>Home</li>
                <li className='p-4 border-b border-gray-700'>Company</li>
                <li className='p-4 border-b border-gray-700'>Research</li>
                <li className='p-4 border-b border-gray-700'>About</li>
                <li className='p-4'>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar