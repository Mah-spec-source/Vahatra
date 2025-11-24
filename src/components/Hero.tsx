import { motion } from "framer-motion";


const Hero: React.FC = () => {
return (
<section className="h-screen flex flex-col justify-center items-center text-center px-6 bg-linear-to-br from-blue-500 to-blue-700 dark:from-blue-800 dark:to-blue-900 text-white">
<motion.h1
className="text-5xl font-extrabold mb-6"
initial={{ opacity: 0, y: -40 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
>
Un Site Moderne & Professionnel
</motion.h1>


<motion.p
className="text-xl max-w-xl mb-8 opacity-90"
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ delay: 0.5 }}
>
Construit avec React, Vite, TypeScript, Tailwind & Framer Motion.
</motion.p>


<motion.button
initial={{ scale: 0.8 }}
animate={{ scale: 1 }}
whileHover={{ scale: 1.1 }}
transition={{ duration: 0.3 }}
className="px-6 py-3 bg-white text-blue-600 dark:bg-gray-900 dark:text-blue-300 font-semibold rounded-lg shadow"
>
Commencer
</motion.button>
</section>
);
};
export default Hero;