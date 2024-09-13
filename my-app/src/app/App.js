import React from "react";
import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";

import "../shared/styles/globals.css";

const App = () => {
  return ( 
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route element={<Home/>} path="/" />
      </Routes>
    </Suspense>
   );
}
 
export default App;