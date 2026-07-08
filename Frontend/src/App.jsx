import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/About/About";
import Faq from "./Pages/Faq/Faq";
import Contact from "./Pages/Contact/Contact";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq/>}/>
        <Route path="/Contact" element={<Contact />}/>
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;