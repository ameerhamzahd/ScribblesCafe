import React from 'react';

const Hashtag = ({ hashtag }) => {
    return (
        <div>
            <span className='bg-gray-200 px-2 py-1 rounded-sm'>#{hashtag}</span>
        </div>
    );
};

export default Hashtag;