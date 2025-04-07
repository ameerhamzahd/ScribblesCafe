import React from 'react';
import Hashtag from '../Hashtag/Hashtag';

const Blog = ({ blog }) => {
    const { title, author, author_img, cover, posted_date, reading_time, hashtags } = blog;

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
                    <div className='flex justify-center gap-2'>
                    <img className='w-10' src={author_img} alt="" />
                    </div>
                    <p>{author}</p>
                    <p>{posted_date}</p>
                    <p>{reading_time}min read</p>
                    <p className='flex gap-2 justify-center'>
                        {
                            hashtags.map(hashtag => <Hashtag key={hashtag.id} hashtag={hashtag}></Hashtag>)
                        }
                    </p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Mark as read</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;