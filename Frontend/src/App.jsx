import { BrowserRouter, Routes, Route } from "react-router-dom";
import PerfumeHomeBlack from "./Components/PerfumeHome&Black/PerfumeHome&Black";

function App() {
  return (
    <BrowserRouter>
      <Routes>

         <Route path="/login" element={<Login />} />
         <Route path="/home" element={<PerfumeHomeBlack/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;