export default function Events() {
  return (
    <section className="py-20 px-6 bg-slate-100 text-center">
      <h2 className="text-3xl font-bold mb-10">Upcoming Events</h2>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-bold text-xl">Youth Revival Night</h3>
          <p className="text-slate-600 mt-2">
            Friday • 7:00 PM
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-bold text-xl">Special Sunday Service</h3>
          <p className="text-slate-600 mt-2">
            Sunday • 9:00 AM
          </p>
        </div>

      </div>
    </section>
  );
}