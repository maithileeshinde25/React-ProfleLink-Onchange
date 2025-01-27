
import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./componants/Layout"; 

function App() {
  return (
    <Routes>
      <Route path="/*" element={<Layout/>} /> 
    </Routes>
  );
}

export default App;





