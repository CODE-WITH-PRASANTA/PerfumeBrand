import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/About/About";
import Faq from "./Pages/Faq/Faq";
import Contact from "./Pages/Contact/Contact";
import Blog from "./Pages/Blog/Blog";
import BlogDetail from "./Pages/BlogDetail/BlogDetail";
import Allperfume from "./Pages/Allperfume/Allperfume";
import EaudeParfum from "./Pages/EaudeParfum/EaudeParfum";
 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq/>}/>
        <Route path="/Contact" element={<Contact />}/>
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogdetail" element={<BlogDetail />} />
        <Route path="/allperfume" element={<Allperfume />} />
        <Route path="/EaudeParfum" element={<EaudeParfum/>} />
      
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;