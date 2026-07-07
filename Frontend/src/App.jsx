import { BrowserRouter, Routes, Route } from "react-router-dom";
import Log from "./Pages/Log/Log";

function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route path="/blog" element={<Log />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;