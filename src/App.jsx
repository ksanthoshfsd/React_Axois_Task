import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Create from "./Pages/Create";
import Edit from "./Pages/Edit";
import Footer from "./Components/Footer";
import Users from "./Pages/Users";
import Details from "./Pages/Details";

const App = () => {
  const [id, setId] = useState(1);
  const [detail, setDetail] = useState(1);
  return (
    <div>
      <BrowserRouter>
        <div>
          <Navbar />
        </div>

        <Routes>
          <Route path="/" element={<Home setDetail={setDetail} />} />
          <Route path="/users" element={<Users setId={setId} />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Edit id={id} />} />
          <Route
            path="/detail/:id"
            element={<Details detail={detail} setId={setId} />}
          />
        </Routes>
        <div>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;

// Day-30 01:10:00