import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'
import image from '../static/thumbnail.png'

function PostCard({$id, title, premium}) {
    
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full h-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center shadow-lg'>
                <img
                src={image}
                alt={title}
                className='w-full h-48 object-cover rounded-xl'
                />
            </div>
            <h2
            className='text-xl font-bold text-center underline py-5'
            >{title}</h2>
            <h2 className={`text-xl ${premium === "true" ? "bg-slate-600 rounded-full p-2 text-center text-white shadow-xl" : "" }`}>{premium === "true" ? "Premium" : ""}</h2>

        </div>
    </Link>
  )
}


export default PostCard