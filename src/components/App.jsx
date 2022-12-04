import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostsList from "./posts/PostsList";
import PostDetail from './posts/PostDetail';
import Header from './partials/Header';

function App() {

  // Define the routes for the app
  return (
    <div>
    <Router>
        <Header/>
        <Routes>
          <Route exact path="/posts" element={<PostsList/>} />
          <Route exact path="/" element={<PostsList/>} />
          <Route path="/posts/:id" element={<PostDetail/>} />
        </Routes>
    </Router>

    </div>

  )

}

export default App
