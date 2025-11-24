import { Link } from "react-router-dom";
import { Moon, Sun } from "lucide-react";


interface Props {
toggleDark: () => void;
dark: boolean;
}


const Navbar: React.FC<Props> = ({ toggleDark, dark }) => {
return (
<nav className="flex justify-between items-center p-6 shadow bg-white dark:bg-gray-800 fixed w-full top-0 left-0 z-50">
<h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">ModernSite</h1>


<ul className="flex gap-6 text-lg md:flex">
<li><Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400">Accueil</Link></li>
<li><Link to="/services" className="hover:text-blue-600 dark:hover:text-blue-400">Services</Link></li>
<li><Link to="/contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</Link></li>
</ul>


<button onClick={toggleDark} className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full">
{dark ? <Sun size={20} /> : <Moon size={20} />}
</button>
</nav>
);
};
export default Navbar;