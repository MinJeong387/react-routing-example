import { Routes, Route } from "react-router-dom";

import Home from "/src/pages/Home";
import About from "/src/pages/About";
import Contact from "/src/pages/Contact";
import Dashboard from "/src/pages/Dashboard";

import Header from "/src/components/Header";
import Navbar from "/src/components/Navbar";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <article>
        {/* Routing 정보 객체 */}
        <Routes>
          {/* 개별 Router 객체*/}
          <Route path="/" element={<Home />} /> {/* path 없으면 Home 보여줘라*/}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </article>
    </div>
  );
}

export default App;
