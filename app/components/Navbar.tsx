export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <h1 className="text-xl font-bold text-blue-700">Grace Church</h1>

      <div className="hidden md:flex gap-8 text-sm font-medium">
        <a href="#home" className="hover:text-blue-600">Home</a>
        <a href="#about" className="hover:text-blue-600">About</a>
        <a href="#sermons" className="hover:text-blue-600">Sermons</a>
        <a href="#contact" className="hover:text-blue-600">Contact</a>
      </div>

      <a
        href="https://wa.me/234XXXXXXXXXX"
        className="bg-green-500 text-white px-4 py-2 rounded-full text-sm hover:bg-green-600"
      >
        Join Us
      </a>
    </nav>
  );
}