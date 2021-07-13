import React from 'react';
import './Blog.scss';
import Footer from '../Footer/Footer'
import BlogEntry1 from './BlogEntries/BlogEntry1'

function Blog() {
  return (
    <div className='blog'>
        <div className='blog-entries'>
          <BlogEntry1 />
        </div>
        <Footer />
    </div>
  );
}

export default Blog;
