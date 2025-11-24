const Contact: React.FC = () => {
return (
<section className="min-h-screen flex flex-col justify-center items-center p-6 bg-gray-50 dark:bg-gray-900">
<h2 className="text-4xl font-bold mb-6">Contactez-nous</h2>
<form className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow w-full max-w-lg space-y-4">
<input placeholder="Nom" className="w-full p-3 rounded bg-gray-100 dark:bg-gray-700" />
<input placeholder="Email" className="w-full p-3 rounded bg-gray-100 dark:bg-gray-700" />
<textarea placeholder="Message" className="w-full h-32 p-3 rounded bg-gray-100 dark:bg-gray-700"></textarea>
<button className="w-full p-3 bg-blue-600 text-white rounded">Envoyer</button>
</form>
</section>
);
};
export default Contact;