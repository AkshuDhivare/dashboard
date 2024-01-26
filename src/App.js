import "./App.css";
import "remixicon/fonts/remixicon.css";
import "bootstrap/dist/css/bootstrap.css";
import SideNav from "./components/menu/SideNav";
import { Routes, Route } from "react-router-dom";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Analytics from "./components/pages/Analytics";
import Settings from "./components/pages/Settings";
import Navbar from "./components/menu/Navbar";

function App() {
  return (
    <div className="">
      <Navbar />
      <SideNav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/setting" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
