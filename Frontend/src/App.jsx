import { BrowserRouter, Routes, Route } from "react-router-dom";
import Log from "./Pages/Log/Log";
import Login from "./Components/Login/Login";
import PerfumeWishlist from "./Components/PerfumeWishlist/PerfumeWishlist";
import PerfumeDetails from "./Pages/PerfumeDetails/PerfumeDetails";


function App() {
  return (
    <BrowserRouter>
      <Routes>

         <Route path="/login" element={<Login/>} />
         <Route path="/blog" element={<Log />} />
         <Route path="/PerfumeWishlist" element={< PerfumeWishlist/>} />
         <Route path="/PerfumeDetails" element={<PerfumeDetails/>} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;