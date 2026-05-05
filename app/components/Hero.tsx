export default function Hero() {
  return (
    <section
      id="home"
      className="text-white text-center py-32 px-6 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1519491050282-cf00c82424b4?q=80&w=1600&auto=format&fit=crop')",
      }}
    >
      <div className="bg-black/60 p-10 rounded-2xl max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">
          Welcome to Grace Church
        </h1>

        <p className="text-lg opacity-90">
          A place of worship, growth, and encounter with God
        </p>

        <a
          href="https://wa.me/2349130490295"
          target="_blank"
          className="inline-block mt-6 bg-green-500 px-6 py-3 rounded-full font-medium hover:bg-green-600"
        >
          Join Us on WhatsApp
        </a>
      </div>
    </section>
  );
}