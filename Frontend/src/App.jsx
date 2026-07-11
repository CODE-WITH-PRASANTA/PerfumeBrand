import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Pages/Navbar/Navbar";
import Footer from "./Pages/Footer/Footer";
import Home from "./Pages/Home/Home";
import Login from "./Components/Login/Login";
import PerfumeWishlist from "./Components/PerfumeWishlist/PerfumeWishlist";
import PerfumeDetails from "./Pages/PerfumeDetails/PerfumeDetails";
import About from "./Pages/About/About";
import Faq from "./Pages/Faq/Faq";
import Contact from "./Pages/Contact/Contact";
import Blog from "./Pages/Blog/Blog";
import BlogDetail from "./Pages/BlogDetail/BlogDetail";
import Allperfume from "./Pages/Allperfume/Allperfume";
import Toilette from "./Pages/Toilette/Toilette";
import EaudeParfum from "./Pages/EaudeParfum/EaudeParfum";
import LimitedEdition from "./Pages/LimitedEdition/LimitedEdition";
import Wishlist from "./Pages/Wishlist/Wishlist";
import Cart from "./Pages/Cart/Cart";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Login />} />
        
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/perfume-wishlist" element={<PerfumeWishlist />} />
        
        <Route path="/perfume-details" element={<PerfumeDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-detail" element={<BlogDetail />} />
        
        <Route path="/all-perfumes" element={<Allperfume />} />
        <Route path="/toilette" element={<Toilette />} />
        <Route path="/eau-de-parfum" element={<EaudeParfum />} />
        <Route path="/limited-edition" element={<LimitedEdition />} />
        
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;