import React, { use } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({ blogsPromise, handleBookmark }) => {
    const blogs = use(blogsPromise);

    return (
        <div>
            <h3 className='font-bold text-3xl'>Blogs: {blogs.length}</h3>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center'>
                {
                    blogs.map(blog => <Blog key={blog.id} blog={blog} handleBookmark={handleBookmark}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;