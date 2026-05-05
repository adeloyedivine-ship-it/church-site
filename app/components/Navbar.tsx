export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-sm">
      <h1 className="text-xl font-bold text-blue-700">Grace Church</h1>

      <div className="flex gap-6 text-sm">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#sermons">Sermons</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}