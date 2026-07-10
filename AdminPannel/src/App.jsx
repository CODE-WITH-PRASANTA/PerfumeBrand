import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./Layout/MainLayout/MainLayout";
import BlogPosting from "./Component/BlogPosting/BlogPosting";



// Pages


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Layout */}
        <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<BlogPosting/>}>
         
        </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;