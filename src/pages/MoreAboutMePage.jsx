// AboutMePage.jsx
import React from 'react';
import BlogPosts from '../components/BlogPosts';

function MoreAboutMePage() {
    return (
      <div className="more-about-me">
        <h3 className="info">Hello! Here are some blog posts I've written:</h3><br />
        <div className="blog-posts">
          <h1>Blog Posts</h1><br />
          <BlogPosts />
        </div>
      </div>
    );
  }
  


export default MoreAboutMePage;