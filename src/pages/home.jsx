import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Home = () => {
  const services = [
    {
      title: "Custom Suits",
      desc: "Setelan jas formal premium dengan detail jahitan eksklusif.",
      image:
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Wedding Attire",
      desc: "Busana pengantin elegan dengan sentuhan mewah dan modern.",
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Formal Wear",
      desc: "Tampil berkelas di setiap acara formal dan spesial.",
      image:
        "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const features = [
    {
      icon: "✂️",
      title: "Presisi Sempurna",
      desc: "Setiap jahitan dibuat dengan detail dan ketelitian tinggi.",
    },
    {
      icon: "🧵",
      title: "Bahan Premium",
      desc: "Menggunakan material terbaik untuk kenyamanan maksimal.",
    },
    {
      icon: "👔",
      title: "Tailor Profesional",
      desc: "Dikerjakan oleh penjahit berpengalaman dan terpercaya.",
    },
  ];

  return (
    <div className="bg-[#fcf9f8] text-gray-900 overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-24">
        <img
          src="https://images.unsplash.com/photo-1593032465171-8bd5d72c8f9d?q=80&w=1600&auto=format&fit=crop"
          alt="Tailor"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="bg-white/90 backdrop-blur p-6 sm:p-8 lg:p-12 max-w-2xl rounded-2xl shadow-2xl">
            <span className="uppercase text-yellow-700 font-semibold tracking-[3px] text-xs sm:text-sm">
              Bespoke Excellence
            </span>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold mt-4 leading-tight">
              Seni Jahitan Berkualitas Tinggi
            </h2>

            <p className="mt-5 text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
              Menciptakan busana eksklusif yang mencerminkan karakter dan
              kepribadian Anda.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button className="bg-black text-white px-6 py-4 rounded-xl hover:bg-yellow-700 transition w-full sm:w-auto">
                Mulai Konsultasi
              </button>

              <button className="border border-black px-6 py-4 rounded-xl hover:bg-black hover:text-white transition w-full sm:w-auto">
                Lihat Koleksi
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Mengapa Krawang Tailor?
            </h2>

            <div className="w-20 h-1 bg-yellow-600 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
            {features.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 sm:p-8 rounded-3xl shadow hover:shadow-2xl transition"
              >
                <div className="text-5xl mb-5">{item.icon}</div>

                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>

                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 sm:py-28 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-14">
            <div>
              <span className="uppercase text-yellow-700 font-semibold tracking-[3px] text-xs sm:text-sm">
                Layanan Unggulan
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold mt-3">
                Dibuat Untuk Momen Spesial Anda
              </h2>
            </div>

            <button className="border-b-2 border-yellow-700 pb-1 font-semibold uppercase tracking-widest w-fit">
              Lihat Semua
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-lg group"
              >
                <div className="overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-[350px] sm:h-[450px] w-full object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>

                  <p className="text-gray-600 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lookbook */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1400&auto=format&fit=crop"
              alt="Lookbook"
              className="rounded-3xl shadow-2xl w-full"
            />

            <img
              src="https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=1000&auto=format&fit=crop"
              alt="Fabric"
              className="hidden md:block absolute -bottom-8 -right-8 w-52 lg:w-64 rounded-3xl border-8 border-white shadow-2xl"
            />
          </div>

          <div>
            <span className="uppercase text-yellow-700 font-semibold tracking-[3px] text-xs sm:text-sm">
              Eksplorasi Gaya
            </span>

            <h2 className="text-3xl sm:text-5xl font-bold mt-4 leading-tight">
              Koleksi Lookbook Musim Ini
            </h2>

            <p className="mt-6 text-gray-600 text-base sm:text-lg leading-relaxed">
              Temukan inspirasi gaya modern dan klasik melalui koleksi eksklusif
              kami.
            </p>

            <div className="space-y-5 mt-10">
              {[
                "Gaya Klasik Kontemporer",
                "Sentuhan Modern Bespoke",
                "Detail Buatan Tangan",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-10 h-[2px] bg-yellow-700"></div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <button className="mt-10 bg-black text-white px-8 py-4 rounded-xl hover:bg-yellow-700 transition w-full sm:w-auto">
              Jelajahi Lookbook
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-24 sm:py-32 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-5xl font-bold leading-tight">
            Siap Menemukan Potongan Terbaik Anda?
          </h2>

          <p className="mt-6 text-base sm:text-lg text-gray-300 leading-relaxed">
            Jadwalkan konsultasi pribadi bersama tailor profesional kami.
          </p>

          <button className="mt-10 bg-yellow-600 text-black font-bold px-8 py-4 rounded-xl hover:bg-white transition w-full sm:w-auto">
            Hubungi Kami
          </button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
