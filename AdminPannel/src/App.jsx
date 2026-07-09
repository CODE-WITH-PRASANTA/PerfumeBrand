import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./Layout/MainLayout/MainLayout";
import BlogPosting from "./Components/BlogPosting/BlogPosting";

// Pages

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Layout Wrapping Frame */}
        <Route path="/" element={<MainLayout />}>
          {/* Automatically redirect from "/" to "/dashboard" */}
          

          <Route path="/blog" element={<BlogPosting />} />
          
     
          
          
       
         
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;