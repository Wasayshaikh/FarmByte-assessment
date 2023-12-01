
import Navbar from './components/Navbar'
import { Routes, Route,Navigate  } from "react-router-dom";
import { Home, Posts } from './views';
function App() {


  return (
    <div>
     <Navbar />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/post" element={<Navigate to='/posts' />} />
      </Routes>
    </div>
  )
}

export default App
