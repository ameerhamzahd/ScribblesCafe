import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Blogs from './components/Blogs/Blogs'
import Activity from './components/Activity/Activity'

const blogsPromise = fetch('/blogs.json')
  .then(response => response.json())

function App() {
  const [bookmarkedBlogs, setBookmarkedBlogs] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  const handleBookmark = (title) => {
    const newBookmarkedBlogs = [...bookmarkedBlogs, title];
    setBookmarkedBlogs(newBookmarkedBlogs);
  };

  const handleMarkAsRead = (time, id) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
    handleRemoveFromBookmarked(id);
  }

  const handleRemoveFromBookmarked = (id) => {
    const remainingBookmarkedBlogs = bookmarkedBlogs.filter(bm => bm.id !== id);
    setBookmarkedBlogs(remainingBookmarkedBlogs);
  }

  return (
    <>
      <Navbar></Navbar>

      <div className="main-container grid grid-cols-4 text-center">
        <div className="left-container col-span-3">
          <Blogs blogsPromise={blogsPromise} handleBookmark={handleBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>

        </div>

        <div className="right-container col-span-1">
          <Activity bookmarkedBlogs={bookmarkedBlogs} readingTime={readingTime}></Activity>

          <div>
            {
              bookmarkedBlogs.map(bm => <p>{bm.title}</p>)
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App
