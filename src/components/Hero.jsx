export default function Hero({ judul, deskripsi }) {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24 text-center">
      <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">
        {judul}
      </h2>

      <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
        {deskripsi}
      </p>
    </section>
  );
}
