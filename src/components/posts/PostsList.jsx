import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CategoryFilter from './CategoryFilter';

import './PostsList.css';


function PostsList() {

    // init
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true); // More posts to load ?

    // automatically identify the loalhost
    const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000';

    // fetch posts
    useEffect(() => {
      setLoading(true);
      fetch(`${API_URL}/api/posts?page=${page}&limit=10`)
        .then(res => res.json())
        .then(data =>{
            setPosts(p => [...p, ...data]); // Add new posts to the existing ones
            setHasMore(data.length === 10) // If we have 10 posts, there might be more
        });
        setLoading(false); // We are done loading
    }, [page,API_URL]); // When the page changes, we fetch new posts

    // handle scroll
    const handleLoadMore = () => {
      setPage(page + 1);
    };
    
    // render UI
    return (
      <div>
        <div>
          <CategoryFilter posts={posts}/>
        </div>
        <div className="buttonDiv p-5">
          {loading ? <p>Loading...</p> : hasMore ? <button className="btn boutonDark" onClick={handleLoadMore}>Load More</button> : null }
        </div>
      </div>
    );
  };

export default PostsList;