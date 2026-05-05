export default function Services() {
  return (
    <section className="grid md:grid-cols-3 gap-6 px-6 py-16 max-w-5xl mx-auto">

      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="font-bold text-lg">Sunday Service</h3>
        <p className="text-slate-600">9:00 AM – Worship & Word</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="font-bold text-lg">Bible Study</h3>
        <p className="text-slate-600">Wednesday 6:00 PM</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="font-bold text-lg">Prayer Meeting</h3>
        <p className="text-slate-600">Saturday 6:00 AM</p>
      </div>

    </section>
  );
}