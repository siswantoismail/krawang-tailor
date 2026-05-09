import { Link } from "react-router";

export default function KrawangTailorContact() {
  return (
    <div className="bg-[#fcf9f8] text-[#1c1b1b] font-sans overflow-x-hidden">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-5 flex items-center justify-between">
          <h1 className="text-2xl md:text-4xl font-bold tracking-wide text-[#001f3f]">
            Krawang Tailor
          </h1>

          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-widest">
            <Link to="/home" className="hover:text-yellow-700 transition">
              Home
            </Link>
            <Link to="/services" className="hover:text-yellow-700 transition">
              Services
            </Link>
            <Link to="/gallery" className="hover:text-yellow-700 transition">
              Gallery
            </Link>
            <Link to="/about" className="hover:text-yellow-700 transition">
              About
            </Link>
            <Link
              to="/contact"
              className="border-b-2 border-yellow-700 pb-1 text-[#001f3f]"
            >
              Contact
            </Link>
          </nav>

          <button className="hidden md:block bg-[#001f3f] text-white px-6 py-3 uppercase text-sm tracking-widest hover:bg-yellow-700 transition">
            Book Consultation
          </button>

          <button className="md:hidden">
            <span className="text-3xl">☰</span>
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 py-20 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-[#001f3f] mb-6">
          Konsultasi Eksklusif
        </h2>

        <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
          Wujudkan busana impian Anda melalui sentuhan tangan ahli. Jadwalkan
          pertemuan pribadi dengan penjahit utama kami untuk mendiskusikan
          desain, bahan, dan ukuran yang sempurna.
        </p>
      </section>

      {/* Main Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Form */}
          <div className="lg:col-span-7 bg-white border border-gray-200 p-8 md:p-12 shadow-sm">
            <h3 className="text-3xl font-bold text-[#001f3f] mb-12">
              Buat Janji Temu
            </h3>

            <form className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <label className="block uppercase text-xs tracking-widest mb-2 font-semibold">
                    Nama Lengkap
                  </label>

                  <input
                    type="text"
                    placeholder="Masukkan nama Anda"
                    className="w-full border-0 border-b border-gray-400 bg-transparent focus:outline-none focus:border-yellow-700 py-3"
                  />
                </div>

                <div>
                  <label className="block uppercase text-xs tracking-widest mb-2 font-semibold">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="nama@email.com"
                    className="w-full border-0 border-b border-gray-400 bg-transparent focus:outline-none focus:border-yellow-700 py-3"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <label className="block uppercase text-xs tracking-widest mb-2 font-semibold">
                    WhatsApp
                  </label>

                  <input
                    type="text"
                    placeholder="+62 812..."
                    className="w-full border-0 border-b border-gray-400 bg-transparent focus:outline-none focus:border-yellow-700 py-3"
                  />
                </div>

                <div>
                  <label className="block uppercase text-xs tracking-widest mb-2 font-semibold">
                    Tipe Layanan
                  </label>

                  <select className="w-full border-0 border-b border-gray-400 bg-transparent focus:outline-none focus:border-yellow-700 py-3">
                    <option>Setelan Jas (Bespoke Suit)</option>
                    <option>Batik Eksklusif</option>
                    <option>Busana Pernikahan</option>
                    <option>Perbaikan (Alteration)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block uppercase text-xs tracking-widest mb-2 font-semibold">
                  Pesan Tambahan
                </label>

                <textarea
                  rows="4"
                  placeholder="Ceritakan kebutuhan busana Anda..."
                  className="w-full border-0 border-b border-gray-400 bg-transparent focus:outline-none focus:border-yellow-700 py-3 resize-none"
                />
              </div>

              <button className="bg-[#001f3f] hover:bg-yellow-700 text-white px-10 py-4 uppercase tracking-widest text-sm transition">
                Kirim Permintaan Konsultasi
              </button>
            </form>
          </div>

          {/* Right Side */}
          <div className="lg:col-span-5 space-y-8">
            {/* Whatsapp */}
            <div className="bg-yellow-50 border border-yellow-200 p-8 hover:border-yellow-700 transition">
              <div className="flex justify-between items-start gap-5">
                <div>
                  <h3 className="text-2xl font-bold text-yellow-700 mb-3">
                    Hubungi Cepat
                  </h3>

                  <p className="text-gray-600 mb-6">
                    Konsultasi instan melalui WhatsApp untuk respons lebih
                    cepat.
                  </p>

                  <button className="flex items-center gap-2 uppercase text-sm font-bold tracking-widest text-yellow-700 hover:underline">
                    WhatsApp Sekarang →
                  </button>
                </div>

                <div className="text-5xl">💬</div>
              </div>
            </div>

            {/* Workshop */}
            <div className="bg-[#f6f3f2] border border-gray-200 p-8">
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-[#001f3f] mb-6">
                  Jam Operasional
                </h3>

                <div className="space-y-4 text-gray-700">
                  <div className="flex justify-between border-b pb-2">
                    <span>Senin - Jumat</span>
                    <span className="font-bold">09:00 - 18:00</span>
                  </div>

                  <div className="flex justify-between border-b pb-2">
                    <span>Sabtu</span>
                    <span className="font-bold">10:00 - 16:00</span>
                  </div>

                  <div className="flex justify-between text-red-500">
                    <span>Minggu</span>
                    <span>Tutup</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#001f3f] mb-4">
                  Lokasi Atelier
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  Jl. Kemang Raya No. 12,
                  <br />
                  Mampang Prapatan,
                  <br />
                  Jakarta Selatan, 12730
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="overflow-hidden h-72 group">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBG1aUWh6kVK2DYAz7mKNIjBE8u8V2Kfgvj0yt-rLH8CIzJQ1_4fBx0u2npNOU7Yakx-KJ3Ng2L0OWnfkAqkxGX1uiHB2QN9ZGitWx1IqBl5YmSJQyDLF5YQoNWzW_NGrmh85B26BT5XIWRKs2DWMaq6NwlB_03nb75g-Vhvyi7apldyePEqZzESsEYCumG-URWxuBnTgznGRzREJtbNs1ZU9gkFgWXj_OqXiGi9P8vSbU3GDSD9RGJ1U1j0wZYxV5T3ShY_5kwj9x0"
                alt="Tailor"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 pb-24">
        <div className="relative h-[500px] overflow-hidden border border-gray-200">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsECu9Yw1wBeQ1LWCii7NoqY84UeF_axFCzGPoAbNwIWJrPmexg9vyqIpqoPctBFLwhZKZ9Sw7KVQuDWrYWWuT47UWdhTpCFa5w8Hd3CG2es5_39o3cCwILmBBdHeGk9-gWJxGP00van0-C6ZAC8pUdJs3lndyJcQ5kbPsWjscT2ISLTsnT3GP8ogoaJEmhGP9ZWfAJSU0Svmk_XbSP1mQJAHH4PSE2N_abQcLQtFogknxnR1l_FUyTi3CtE0ca2C9SXxxi5iCtPHF"
            alt="Map"
            className="w-full h-full object-cover grayscale"
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-[#001f3f] text-white p-8 text-center shadow-2xl">
              <div className="text-5xl mb-3">📍</div>
              <p className="uppercase tracking-widest text-sm">
                Krawang Atelier
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#001f3f] py-24">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ingin Melihat Koleksi Bahan Kami?
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-10">
            Kami menyediakan pilihan bahan premium dari wool Italia hingga sutra
            murni. Temukan bahan yang tepat untuk karakter Anda.
          </p>

          <button className="border border-yellow-500 text-yellow-400 px-10 py-4 uppercase tracking-widest hover:bg-yellow-500/10 transition">
            Lihat Katalog Bahan
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#001f3f] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-20 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-3xl font-bold text-yellow-400 mb-5">
              Krawang Tailor
            </h3>

            <p className="text-gray-300">
              Bespoke excellence for the modern gentleman and woman.
            </p>
          </div>

          <div>
            <h4 className="uppercase text-sm tracking-widest text-yellow-400 mb-5">
              Quick Links
            </h4>

            <div className="space-y-3 text-gray-300">
              <a href="#" className="block hover:text-yellow-400">
                Privacy Policy
              </a>

              <a href="#" className="block hover:text-yellow-400">
                Terms of Service
              </a>

              <a href="#" className="block hover:text-yellow-400">
                Fabric Sourcing
              </a>

              <a href="#" className="block hover:text-yellow-400">
                Our Process
              </a>
            </div>
          </div>

          <div>
            <h4 className="uppercase text-sm tracking-widest text-yellow-400 mb-5">
              Contact
            </h4>

            <div className="space-y-3 text-gray-300">
              <p>+62 21 555 0123</p>
              <p>contact@krawangtailor.com</p>
            </div>
          </div>

          <div>
            <h4 className="uppercase text-sm tracking-widest text-yellow-400 mb-5">
              Social
            </h4>

            <div className="space-y-3 text-gray-300">
              <a href="#" className="block hover:text-yellow-400">
                Instagram
              </a>

              <a href="#" className="block hover:text-yellow-400">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-8 text-center text-gray-400 text-sm">
          © 2024 Krawang Tailor. Bespoke Excellence.
        </div>
      </footer>
    </div>
  );
}
