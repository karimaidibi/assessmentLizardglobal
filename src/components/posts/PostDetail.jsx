import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams} from 'react-router-dom'

import './PostDetail.css';

const PostDetail = () => {

    // get the id from the url
    const id = useParams().id;

    // init
    const [post, setPost] = useState({});
    const [author, setAuthor] = useState({});

    // fetch post
    useEffect(() => {
      fetch(`http://localhost:3000/api/posts/${id}`)
        .then(res => res.json())
        .then(data =>{
            setPost(data);
            setAuthor(data.author); // retreivei the author
        });
    }, [id]); // Fetch the post when the id changes

  // render UI
  return (
    <div className="p-3 row row-cols-1 row-cols-lg-2 g-2 g-lg-4">
        {/*column image*/}
        <div  className="col">
            <div className="box bg-body shadow-sm border">
                <img src={author.avatar} className="img-fluid" alt="..."></img>
            </div>
        </div>
        {/*column detail list*/}
        <div className="col bg-body shadow border">
          {/*list de detail*/}
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Title : {post.title}</li>
            <li className="list-group-item">Publish Date : {post.publishDate}</li>
            <li className="list-group-item">Author Name: {author.name}</li>
            <li className="list-group-item">Summary {post.summary}</li>
            {/*list of categories*/}
            <li className="list-group-item">Categories : {post.categories?.map((category) => (
                <span className="badge bg-primary">{category.name}</span>
            ))}</li>
          </ul>
        </div>
    </div>
  );
};

export default PostDetail;