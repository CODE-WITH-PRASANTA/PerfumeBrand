import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/About/About";
import Blog from "./Pages/Blog/Blog";
import BlogDetail from "./Pages/BlogDetail/BlogDetail";
import Allperfume from "./Pages/Allperfume/Allperfume";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogdetail" element={<BlogDetail />} />
        <Route path="/allperfume" element={<Allperfume />} />

        
        
        
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;