import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../comments/Comments';


const PostDetail = (props) => {
    const {postNo} = useParams();
    //post api...
    const [post, setPost] = useState({});
    useEffect(() =>{
        const postUrl = `https://jsonplaceholder.typicode.com/posts/${postNo}`;
        fetch(postUrl)
        .then(res => res.json())
        .then(data => setPost(data))
        
    },[])

    //comments api...

const [comments, setComments] = useState([]);
    useEffect(() =>{
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postNo}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setComments(data))

    },[])
    

    const postStyle ={
      borderBottom: '1px solid lightGray',
      borderRadius:'5px',
      margin:'5px auto',
      width:'47%',
    //   boxShadow:'5px 5px 2px lightGray',
      padding:'20px'
    }
    const buttonStyle = {
        borderRadius:'5px',
        cursor:'pointer',
        padding:'5px',
        backgroundColor:'lightGray',
       
    }

    return (
        <div className style={postStyle} >
        
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <button className style={buttonStyle}>comments</button>
          
            {
                comments.map(comment => <Comments key={comments.id} postNo ={postNo} useParams={useParams} comment={comment}></Comments>)
            }

        </div>
    );
};

export default PostDetail;