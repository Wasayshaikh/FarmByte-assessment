
import Navbar from './components/Navbar'
import { Routes, Route,Navigate  } from "react-router-dom";
import { Home, SinglePost, Posts } from './views';
function App() {


  return (
    <div className=' bg-gray-300'>
     <Navbar />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/post" element={<Navigate to='/posts' />} />
        <Route path="/posts/:id" element={<SinglePost />} />
      </Routes>
    </div>
  )
}

export default App
