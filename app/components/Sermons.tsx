export default function Sermons() {
  return (
    <section id="sermons" className="py-20 px-6 text-center bg-white">
      <h2 className="text-3xl font-bold mb-8">Latest Sermon</h2>

      <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-lg">
        <iframe
          className="w-full aspect-video"
          src="https://www.youtube.com/embed/ysz5S6PUM-U"
          title="Sermon Video"
          allowFullScreen
        ></iframe>
      </div>

      <p className="mt-4 text-slate-600">
        Watch our latest message and grow in faith.
      </p>
    </section>
  );
}