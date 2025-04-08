import React from 'react';
import { FaBookmark } from "react-icons/fa";
import Hashtag from '../Hashtag/Hashtag';

const Blog = ({ blog, handleBookmark, handleMarkAsRead }) => {
    const { id, title, author, author_img, cover, posted_date, reading_time, hashtags } = blog;

    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        src={cover}
                        alt="" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <div className='flex items-center justify-around gap-2'>
                        <img className='w-10' src={author_img} alt="" />
                        <p>{author}</p>
                        <button onClick={() => handleBookmark(blog)}><FaBookmark size={25} /></button>
                    </div>
                    <p>{posted_date}</p>
                    <p>{reading_time}min read</p>
                    <div className='flex gap-2 justify-center'>
                        {
                            hashtags.map(hashtag => <Hashtag key={hashtag} hashtag={hashtag}></Hashtag>)
                        }
                    </div> 
                    <div className="card-actions justify-end">
                        <button onClick={() => handleMarkAsRead(reading_time, id)} className="btn btn-primary">Mark as read</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;