import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';


const Home = () => {
    const [post, setPost] = useState([]);

    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/posts'
        fetch(url)
        .then(res => res.json())
        .then(data =>setPost(data))
    },[])
    return (
        
        <div>
            {
                post.map(data => <Post key ={data.id} data={data}></Post>)
            }

        </div>
        
    );
};

export default Home;