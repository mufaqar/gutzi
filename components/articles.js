import React from 'react';
import Blogs from './blog/blogs';

export default function Articles({ blog }) {
  return (
    <>
      <section className="section-featured" id="featured">
        <div className="shell">
          <header className="section__head">
            <h3>Featured Blog</h3>
          </header>

          <div className="section__body">
            <Blogs blog={blog} />
          </div>
        </div>
      </section>
    </>
  );
}
