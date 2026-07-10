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
<<<<<<< HEAD
import Toilette from "./Pages/Toilette/Toilette";

=======
=======
import LimitedEdition from "./Pages/LimitedEdition/LimitedEdition";

>>>>>>> 759acd2a5320cc8a92ea4b8b3ca4101ee1afb0cf
=======
import EaudeParfum from "./Pages/EaudeParfum/EaudeParfum";
import LimitedEdition from "./Pages/LimitedEdition/LimitedEdition";
>>>>>>> 95400b733c7945e177e3e2a4d95d84cb364cc536
import Navbar from "./Pages/Navbar/Navbar";
import Footer from "./Pages/Footer/Footer";
import Wishlist from "./Pages/Wishlist/Wishlist";
import Home from "./Pages/Home/Home";
<<<<<<< HEAD
import Cart from "./Pages/Cart/Cart";
>>>>>>> 4bb4db5a25c7a9b2f86ecde7b3c081fe79ff245d

=======
>>>>>>> 95400b733c7945e177e3e2a4d95d84cb364cc536

 
function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
<<<<<<< HEAD

         <Route path="/account" element={<Login/>} />
         <Route path="/wishlist" element={< PerfumeWishlist/>} />
         <Route path="/PerfumeDetails" element={<PerfumeDetails/>} />
         <Route path="/limited-edition" element={<LimitedEdition/>} />
         <Route path="/" element={<Home/>} />
        


=======
        <Route path="/login" element={<Login/>} />
        <Route path="/PerfumeWishlist" element={< PerfumeWishlist/>} />
        <Route path="/PerfumeDetails" element={<PerfumeDetails/>} />
        <Route path="/about" element={<About />} />
        <Route path="/account" element={<Login/>} />
        <Route path="/wishlist" element={< PerfumeWishlist/>} />
        <Route path="/PerfumeDetails" element={<PerfumeDetails/>} />
        <Route path="/limited-edition" element={<LimitedEdition/>} />
        <Route path="/home" element={<Home />} />
>>>>>>> b176f5e66aa9011bb313b382f4fddd2947a3868a
        <Route path="/about-us" element={<About />} />
        <Route path="/faq" element={<Faq/>}/>
        <Route path="/Contact" element={<Contact />}/>
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogdetail" element={<BlogDetail />} />
<<<<<<< HEAD
<<<<<<< HEAD
        <Route path="/allperfume" element={<Allperfume />} />
        <Route path="/toilette" element={<Toilette />} />
        
        
=======
=======
        <Route path="/allperfume" element={<Allperfume />} />
        <Route path="/EaudeParfum" element={<EaudeParfum/>} />
>>>>>>> 95400b733c7945e177e3e2a4d95d84cb364cc536
        <Route path="/all-perfumes" element={<Allperfume />} />
        <Route path="/wishlist" element={<Wishlist />} />
<<<<<<< HEAD
        <Route path="/cart" element={<Cart />} />
>>>>>>> 4bb4db5a25c7a9b2f86ecde7b3c081fe79ff245d

      
      
=======
        
>>>>>>> 95400b733c7945e177e3e2a4d95d84cb364cc536
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;