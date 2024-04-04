import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }
  return (
    <button
    className='inline-block bg-lime-400 px-6 py-2 rounded-full duration-200 hover:scale-105'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn