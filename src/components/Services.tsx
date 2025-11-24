import { motion } from "framer-motion";


interface ServiceItemProps {
title: string;
description: string;
}


const ServiceItem: React.FC<ServiceItemProps> = ({ title, description }) => (
<motion.div
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5 }}
className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition text-center"
>
<h3 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">{title}</h3>
<p className="text-gray-600 dark:text-gray-300">{description}</p>
</motion.div>
);


const Services: React.FC = () => {
return (
<section className="py-24 px-6 bg-gray-100 dark:bg-gray-900">
<h2 className="text-4xl font-bold text-center mb-12">Nos Services</h2>


<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
<ServiceItem title="Développement Web" description="Sites modernes et performants." />
<ServiceItem title="UI/UX Design" description="Interfaces intuitives et élégantes." />
<ServiceItem title="SEO" description="Boostez votre visibilité en ligne." />
</div>
</section>
);
};
export default Services;