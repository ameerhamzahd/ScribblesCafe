import React from 'react';

const Activity = ({ bookmarkedBlogs, readingTime }) => {
    return (
        <div className='bg-gray-100 p-4 rounded-lg'>
            <h5 className='font-bold text-md'>Reading Time: {readingTime}</h5>
            <h5 className='font-bold text-md'>Bookmarked Count: {bookmarkedBlogs.length}</h5>
        </div>
    );
};

export default Activity;