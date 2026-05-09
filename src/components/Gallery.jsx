import { Link } from "react-router";

// import "./App.css";
export default function KrawangTailorGallery() {
  const galleryItems = [
    {
      category: "PAKAIAN PRIA",
      title: "The Executive Charcoal Three-Piece",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCwglI6IjWvyMZG7HjMXbQGdks0aIyb-GRYlogjFdMjQ4F80pzyAtUJB7QfMY17skKBsiJ6GOD1uGmOFAq9WUeegpajwNujL6m9OY3LYIvgHPuqRpII8toIVsrcgwQuT03-M0txbBzQrdfqN1VttOPZpm79j3lYoVLDlZEKckX-fQygts_ewBY9sxaPkDP-v6gasYg5vJ5fL1zyTUMwnUro1EidftVF0T--VCGjfd-8R9G-5BOEn_30wfsJ1Fww6ebMEiEnjUy1MGiV",
      colSpan: "md:col-span-8",
      aspect: "aspect-[16/9]",
    },
    {
      category: "GAUN MALAM",
      title: "Emerald Silk Gala Gown",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBObUG5XrQ8BavNIK_WU5r8p6oj1f9PWWgK-U4WoVTBoam0wG_HrNPunbTsOF83mjux8q9COExcTSouA-avfpheT37p6cRf-du0u8wg7VZK7RK9cP2Xlw1qYBBzClcXpUptjC18MlZk1mXUUI1HN7wDGP2ZzCiJCx0LKAlV4sOAKHut8-_nKSdX_D7HWxOtgSJkOxdrpP1Aqub3eD684XaR96yhjoI2WZCNua9onTI1t5pK2xYLUoD01tWd7rM3hHrVRbGdHy7CQy0U",
      colSpan: "md:col-span-4",
      aspect: "aspect-[3/4]",
    },
    {
      category: "DETAIL BORDIR",
      title: "Golden Thread Heritage Motif",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBcaCoLkfl92ywsIv1-qe4MDse5ggzT7Y1xr7yVe0IvsOivIoZXDcLELuNKW_sxADRtdyNKM9JvtHqKh_AqvXWrgEuuggQV0jdSKn2tSOEhDczFavX35ALZgNk8Y8iFlX7KtgisCabInwXVaBf91rX6uJUqUwvBCFNuGolOQidxSog2Cl_2OzCyjqIs1dMYq1914AILlrWX-tXIkIZxlrcHSTPFeiIIunTjchezs1xmnX14IhiSpppozgZill74jBGyyzVtAvVGKpTN",
      colSpan: "md:col-span-4",
      aspect: "aspect-square",
    },
    {
      category: "KOLEKSI MUSIMAN",
      title: "Summer Cotton Collection 2024",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuApuBUnsj44PCCLNPyAXl4MYXhfaUPwYc4XtGKKyDr2QSf3aPi3yKrzcOyZBlBoqUULoGwtwcGeXecr6z8QFXbtpfb28OUVehLTQUqSryPnhZfH6hkkpRNKSTVGIDuOC1tJqJAsMZc0FR8sKBuuGv1Z6g2jPDUFTCxKTN7GI_BYJMpr7z4-A1q0fT8de7KktAPEgvDQzdWB78t3_he-OMJaV6dSdHdO6y_RY9Q_C64SilYp_09K8A0aPShlq7o4Du4YyQT2FP7IZ_gy",
      colSpan: "md:col-span-8",
      aspect: "aspect-[21/9]",
    },
    {
      category: "BATIK BESPOKE",
      title: "Sogan Pattern Signature Shirt",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCygePUUj58GBCLAmlFeWCERZuXKtBgCyaTjytCBQMCK7x_wXtyK_pzxdiDxpzfdKIcXH-6daG_9KEBFYpTdEIsn2lbvESlvB4GBd33rs4w_UrZU81x3FR8Vkjv0EM78cpASLbMWsB0WZvj1tiG0CsFkAvJqVR4eI0XzNK2rniYMN3EXSKi-b6CMVrBZQpnrLYLl20I6brsppLTbwO1eVfFQtJH1d7GN04p507djWL69xCFsv9M-rTRT6xEC09mg2LTUYepk0mvj5Kg",
      colSpan: "md:col-span-4",
      aspect: "aspect-[3/4]",
    },
  ];

  return (
    <div className="bg-[#fcf9f8] text-[#1c1b1b] overflow-x-hidden">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-4 flex items-center justify-between">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            Krawang Tailor
          </h1>

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-8 text-sm uppercase tracking-widest">
            <Link to="/home" className="hover:text-yellow-700 transition">
              Home
            </Link>
            <Link to="/services" className="hover:text-yellow-700 transition">
              Services
            </Link>
            <Link
              to="/gallery"
              className="text-yellow-700 border-b border-yellow-700 pb-1"
            >
              Gallery
            </Link>
            <Link to="/about" className="hover:text-yellow-700 transition">
              About
            </Link>
            <Link to="/contact" className="hover:text-yellow-700 transition">
              Contact
            </Link>
          </div>

          {/* Mobile Button */}
          <button className="lg:hidden text-3xl">☰</button>

          {/* Desktop CTA */}
          <button className="hidden md:block bg-black text-white px-5 py-3 text-xs uppercase tracking-widest hover:bg-yellow-700 transition">
            Book Consultation
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-24 text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          Galeri Mahakarya
        </h2>

        <p className="max-w-3xl mx-auto text-base sm:text-lg text-gray-600 leading-relaxed">
          Eksplorasi dedikasi kami dalam seni jahitan tangan yang presisi,
          material mewah, dan desain yang tak lekang oleh waktu.
        </p>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-10">
          {[
            "Semua",
            "Pakaian Pria",
            "Gaun Malam",
            "Batik Bespoke",
            "Detail Bordir",
          ].map((item, index) => (
            <button
              key={index}
              className={`px-4 sm:px-5 py-2 border text-[10px] sm:text-xs uppercase tracking-widest transition-all ${
                index === 0
                  ? "bg-black text-white border-black"
                  : "border-gray-300 hover:border-black hover:text-black"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-20 sm:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          {galleryItems.map((item, index) => (
            <div key={index} className={`${item.colSpan} group cursor-pointer`}>
              <div
                className={`${item.aspect} overflow-hidden rounded-xl bg-gray-100`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition duration-700"
                />
              </div>

              <div className="mt-4">
                <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-yellow-700 mb-2">
                  {item.category}
                </p>

                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold leading-snug">
                    {item.title}
                  </h3>

                  <span className="text-xl sm:text-2xl group-hover:translate-x-1 group-hover:-translate-y-1 transition">
                    ↗
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f0eded] py-16 sm:py-24 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Siap Menentukan Gaya Anda?
          </h2>

          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            Mulai perjalanan busana kustom Anda hari ini dengan konsultasi
            pribadi bersama master tailor kami.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-black text-white px-8 sm:px-10 py-4 uppercase tracking-widest text-xs sm:text-sm hover:bg-yellow-700 transition">
              Jadwalkan Konsultasi
            </button>

            <button className="border border-black px-8 sm:px-10 py-4 uppercase tracking-widest text-xs sm:text-sm hover:bg-black hover:text-white transition">
              Hubungi WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="text-3xl font-bold text-yellow-500 mb-4">
              Krawang Tailor
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Menciptakan kesempurnaan jahitan sejak 1998.
            </p>
          </div>

          <div>
            <h4 className="uppercase tracking-widest text-sm text-yellow-500 mb-5">
              Navigasi
            </h4>

            <ul className="space-y-3 text-gray-400">
              <li>Home</li>
              <li>Services</li>
              <li className="text-yellow-500 font-semibold">Gallery</li>
              <li>About</li>
            </ul>
          </div>

          <div>
            <h4 className="uppercase tracking-widest text-sm text-yellow-500 mb-5">
              Informasi
            </h4>

            <ul className="space-y-3 text-gray-400">
              <li>Fabric Sourcing</li>
              <li>Our Process</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>

          <div>
            <h4 className="uppercase tracking-widest text-sm text-yellow-500 mb-5">
              Kunjungi Kami
            </h4>

            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
              Jl. Kemang Raya No. 12
              <br />
              Jakarta Selatan, Indonesia
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 py-6 text-center text-gray-500 text-xs sm:text-sm">
          © 2024 Krawang Tailor. Bespoke Excellence.
        </div>
      </footer>
    </div>
  );
}
