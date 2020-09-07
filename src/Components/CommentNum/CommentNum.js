import React, { useReducer, useState } from 'react';
import { useParams } from 'react-router-dom';
import{ useEffect} from 'react';
import Comments from '../Comments/Comments';
import Posts from '../Posts/Posts';
import Container from '@material-ui/core/Container';

const CommentNum = () => {
    const{ postId} =useParams();
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
    const [comments, setComments] = useState([]);
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setComments(data)) 
        console.log(comments);
    }, [])

    const ul = `https://jsonplaceholder.typicode.com/posts/${postId}`
    const [details, setDetails] = useState([]);
    useEffect(() => {
        fetch(ul)
        .then(res => res.json())
        .then(data => setDetails(data)) 
        
    }, [])
  
    return (
        <Container maxWidth="sm">
           { <Posts post={details} showButton = {false}/>}
           
           {
               
               comments.map(ct => <Comments key={ct.id} comments={ct}></Comments>)
           }
        
        </Container>
            
    );
};

export default CommentNum;