import { AcademicCapIcon } from '@heroicons/react/24/solid'
import { NavLink, Link } from 'react-router-dom'


function Header() {
  return (
    <>
      <div className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 p-10'>
        <div className='w-full h-full flex flex-row items-center justify-between m-auto px-[10px]'>
          <Link
            to='about'
            className='h-auto w-auto flex flex-row items-center cursor-pointer hover:animate-bounce'
          >
            <AcademicCapIcon className='text-[#b49bff] h-12 w-12 mr-3 '/>
            <h1 className=' text-[26px] text-white '>Skill SnacX</h1>
          </Link>

          <div className='w-auto h-full flex flex-row items-center justify-center'>
            <div className='flex items-center gap-48 justify-between border border-[#7042f861] bg-[#0300145e] ml-10 px-[20px] py-[10px] rounded-full text-gray-200'>
              <NavLink to='' className='cursor-pointer'>
                Home
              </NavLink>
              <NavLink to='blog' className='cursor-pointer'>
                Blogs
              </NavLink>
              <NavLink to='contact' className='cursor-pointer'>
                Contact
              </NavLink>
            </div>
          </div>
            <div className='h-auto w-auto flex flex-row gap-5'>
              <Link
                to="login"
              className="text-gray-300 hover:text-[#030014] hover:bg-slate-400 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              >
                Log in
              </Link>
              <Link
                to="#"
              className="text-white bg-[#8543ff] hover:bg-[#d56dfe] focus:ring-4 focus:ring-[#8543ff] font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              >
                Get started
              </Link>
            </div>
        </div>
      </div>
    </>
  )
}
export default Header