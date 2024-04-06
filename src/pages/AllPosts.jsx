import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";
import { AcademicCapIcon } from '@heroicons/react/24/solid'

function AllPosts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents);
                setLoading(false);
            }
        });
    }, []);

  return (
    <div className='w-full h-auto py-8 my-12'>
    
        <Container>
        
        <h1 className='text-4xl font-bold mb-4 text-lime-400'> All Posts </h1>
        {loading ? (
            <div className='flex justify-center items-center h-[500px]'>
                   <AcademicCapIcon className='w-20 h-20 animate-spin text-lime-400' />
              </div>
         ) : (
             <div className='flex flex-wrap'>
                 {posts.map((post) => (
                     <div key={post.$id} className='p-2 w-1/4 h-auto'>
                         <PostCard {...post} />
                     </div>
                 ))}
             </div>
         )}
            </Container>
    </div>
  )
}

export default AllPosts