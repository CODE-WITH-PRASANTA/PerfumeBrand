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
import EaudeParfum from "./Pages/EaudeParfum/EaudeParfum";
import LimitedEdition from "./Pages/LimitedEdition/LimitedEdition";
import Navbar from "./Pages/Navbar/Navbar";
import Footer from "./Pages/Footer/Footer";
import Wishlist from "./Pages/Wishlist/Wishlist";
import Home from "./Pages/Home/Home";

 
function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/PerfumeWishlist" element={< PerfumeWishlist/>} />
        <Route path="/PerfumeDetails" element={<PerfumeDetails/>} />
        <Route path="/about" element={<About />} />
        <Route path="/account" element={<Login/>} />
        <Route path="/wishlist" element={< PerfumeWishlist/>} />
        <Route path="/PerfumeDetails" element={<PerfumeDetails/>} />
        <Route path="/limited-edition" element={<LimitedEdition/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/faq" element={<Faq/>}/>
        <Route path="/Contact" element={<Contact />}/>
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogdetail" element={<BlogDetail />} />
        <Route path="/allperfume" element={<Allperfume />} />
        <Route path="/EaudeParfum" element={<EaudeParfum/>} />
        <Route path="/all-perfumes" element={<Allperfume />} />
        <Route path="/wishlist" element={<Wishlist />} />
        
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;