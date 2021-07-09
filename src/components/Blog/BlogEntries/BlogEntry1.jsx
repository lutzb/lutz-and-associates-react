import React from 'react';
import './BlogEntries.scss';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function BlogEntry1() {
  return (
    <div className='blog-entry'>
      <h1>Test Blog Post #1</h1>
      <h2>Written by Jeffrey Lutz - Updated 07/09/2021</h2>
      <p className='blog-text'>
        This is how you blog:
      </p>

      <SyntaxHighlighter language='cs' style={dracula} className='code'>
{`
  public string DoesSomething()
  {
    return "This is a test."
  }

`}
      </SyntaxHighlighter>

      <p className='blog-text'>
        And thats how you blog.
      </p>
    </div>
  );
}

export default BlogEntry1;
