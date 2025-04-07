import { Suspense } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Blogs from './components/Blogs/Blogs'
import Activity from './components/Activity/Activity'

const blogsPromise = fetch('/blogs.json')
  .then(response => response.json())

function App() {

  return (
    <>
      <Navbar></Navbar>
      
      <div className="main-container grid grid-cols-4 text-center">
        <div className="left-container col-span-3">
          <Blogs blogsPromise={blogsPromise}></Blogs>

        </div>

        <div className="right-container col-span-1">
          <Activity></Activity>
        </div>
      </div>
    </>
  )
}

export default App
