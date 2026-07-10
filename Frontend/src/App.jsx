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
<<<<<<< HEAD
<<<<<<< HEAD
import Toilette from "./Pages/Toilette/Toilette";

=======
=======
import LimitedEdition from "./Pages/LimitedEdition/LimitedEdition";

>>>>>>> 759acd2a5320cc8a92ea4b8b3ca4101ee1afb0cf
import Navbar from "./Pages/Navbar/Navbar";
import Footer from "./Pages/Footer/Footer";
import Wishlist from "./Pages/Wishlist/Wishlist";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
>>>>>>> 4bb4db5a25c7a9b2f86ecde7b3c081fe79ff245d


function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>

         <Route path="/account" element={<Login/>} />
         <Route path="/wishlist" element={< PerfumeWishlist/>} />
         <Route path="/PerfumeDetails" element={<PerfumeDetails/>} />
         <Route path="/limited-edition" element={<LimitedEdition/>} />
         <Route path="/home" element={<Home/>} />
        


        <Route path="/about-us" element={<About />} />
        <Route path="/faq" element={<Faq/>}/>
        <Route path="/Contact" element={<Contact />}/>
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogdetail" element={<BlogDetail />} />
<<<<<<< HEAD
        <Route path="/allperfume" element={<Allperfume />} />
        <Route path="/toilette" element={<Toilette />} />
        
        
=======
        <Route path="/all-perfumes" element={<Allperfume />} />
       
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
>>>>>>> 4bb4db5a25c7a9b2f86ecde7b3c081fe79ff245d

      
      
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;