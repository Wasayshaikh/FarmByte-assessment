
import Navbar from './components/Navbar'
import { Routes, Route,Navigate  } from "react-router-dom";
import { Home, SinglePost, Posts, PageNotFound } from './views';
function App() {


  return (
    <div>
     <Navbar />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/post" element={<Navigate to='/posts' />} />
        <Route path="/posts/:id" element={<SinglePost />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  )
}

export default App
