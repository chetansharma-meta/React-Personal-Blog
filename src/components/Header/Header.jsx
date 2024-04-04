import React from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AcademicCapIcon } from '@heroicons/react/24/solid'
import { NavLink } from 'react-router-dom'
function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]


  return (


    <div className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#7d7d7d17]/30 bg-[#03001417] backdrop-blur-md z-50 p-10 border-b'>
      <div className='w-full h-full flex flex-row items-center justify-between m-auto px-[10px]'>
        <Link
          to='about'
          className='h-auto w-auto flex flex-row items-center cursor-pointer hover:animate-bounce'
        >
          <AcademicCapIcon className='text-[#b49bff] h-12 w-12 mr-3 '/>
          <h1 className=' text-[26px] text-white '>Blog</h1>
        </Link>

        <div className='w-auto h-full flex flex-row items-center justify-center'>
          <div className='flex items-center gap-48 justify-between border list-none border-[#7042f861] bg-[#0300145e] ml-10 px-[20px] py-[10px] rounded-full text-gray-200'>
            {navItems.map((item) => 
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 hover:text-gray-950 rounded-full list-none'
                  >{item.name}</button>
                </li>
              ) : null
            )}
            
          </div>
        </div>
        <div className='h-auto w-auto flex flex-row gap-5'>
          {authStatus && (
              <li className=' list-none text-gray'>
                <LogoutBtn />
              </li>
            )}
          
        </div>
      </div>
    </div>
  )
}

export default Header