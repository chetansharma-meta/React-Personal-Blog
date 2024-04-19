import React, { useEffect, useState } from 'react';
import appwriteService from "../appwrite/config";
import { Container, PostCard } from '../components';
import { AcademicCapIcon } from '@heroicons/react/24/solid'

function Home() {
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
        <div className='w-full my-20 h-auto'>
            <Container>
                <h1 className='text-4xl font-bold mb-4 text-lime-400'>Posts</h1>
                {loading ? (
                   <div className='flex justify-center items-center h-[500px]'>
                          <AcademicCapIcon className='w-20 h-20 animate-spin text-lime-400' />
                     </div>
                ) : (
                    <div className='flex flex-wrap'>
                            {posts.slice(0, 8).map((post) => (
                            <div key={post.$id} className='p-2 w-1/4 h-auto'>
                                <PostCard {...post} />
                            </div>
                        ))}
                    </div>
                )}
            </Container>
        </div>
    );
}

export default Home;
