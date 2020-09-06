import React, { useEffect, useState } from 'react';
import Posts from '../Posts/Posts';

const PostSerial = () => {
    const [postItem, setPostItem] = useState([]);
    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        fetch(url)
        .then(res => res.json())
        .then(data => setPostItem(data))
    }, [])
    return (
        <div>
          {
              postItem.map(pt => <Posts key={pt.id} post = {pt}></Posts>)
          }
        </div>
    );
};

export default PostSerial;