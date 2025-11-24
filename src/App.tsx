import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useState } from "react";


const App: React.FC = () => {
const [dark, setDark] = useState(true);


const toggleDark = () => {
setDark(!dark);
document.documentElement.classList.toggle("dark");
};


return (
<div className="min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-gray-100 transition">
<Navbar toggleDark={toggleDark} dark={dark} />
<Routes>
<Route path="/" element={<Hero />} />
<Route path="/services" element={<Services />} />
<Route path="/contact" element={<Contact />} />
</Routes>
<Footer />
</div>
);
};


export default App;