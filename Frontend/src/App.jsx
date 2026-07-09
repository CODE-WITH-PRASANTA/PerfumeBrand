import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import PerfumeWishlist from "./Components/PerfumeWishlist/PerfumeWishlist";
import PerfumeDetails from "./Pages/PerfumeDetails/PerfumeDetails";
import About from "./Pages/About/About";
import Faq from "./Pages/Faq/Faq";
import Contact from "./Pages/Contact/Contact";
import Blog from "./Pages/Blog/Blog";
import BlogDetail from "./Pages/BlogDetail/BlogDetail";
import Allperfume from "./Pages/Allperfume/Allperfume";
import PerfumeLimitedEdition from "./Components/PerfumeLimitedEdition/PerfumeLimitedEdition";


function App() {
  return (
    <BrowserRouter>
      <Routes>

         <Route path="/login" element={<Login/>} />
         <Route path="/PerfumeWishlist" element={< PerfumeWishlist/>} />
         <Route path="/PerfumeDetails" element={<PerfumeDetails/>} />
         <Route path="/PerfumeLimitedEdition" element={<PerfumeLimitedEdition/>} />


        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq/>}/>
        <Route path="/Contact" element={<Contact />}/>
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogdetail" element={<BlogDetail />} />
        <Route path="/allperfume" element={<Allperfume />} />

      
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;