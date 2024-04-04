import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import {Container, PostCard} from '../components'

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
  
    return (
        <div className='w-full mt-[150px] h-screen'>
            <Container>
                <div className='flex flex-wrap h-[300]' >
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4 h-full'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home