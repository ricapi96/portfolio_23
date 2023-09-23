// BlogPosts.jsx
import React from 'react';

function BlogPosts() {
  const blogPosts = [
    {
      title: 'My First Blog Post',
      content: 'This is my first blog post. Lorem ipsum dolor sit amet...',
    },
    {
      title: 'Another Blog Post',
      content: 'Here is another interesting blog post. Consectetur adipiscing elit...',
    },
    // Add more blog posts 
  ];

  return (
    <div className="blog-posts">
      {blogPosts.map((post, index) => (
        <div key={index} className="blog-post">
          <h2>{post.title}</h2>
          <p>{post.content}</p><br /><br />
        </div>
      ))}
    </div>
  );
}

export default BlogPosts;
