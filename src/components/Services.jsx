const services = [
  {
    title: "Pakaian Formal",
    subtitle: "Premium Bespoke",
    desc: "Didesain khusus untuk mencerminkan otoritas dan kepercayaan diri dengan pola yang dipersonalisasi.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuADtz045qe3mO1cAr299LyWIw9fnLi4OCcD1NbZLh42oYEkOYVwwCPZh_A8G_SMTXWEAk3tRGEJsiHK9hRjAULG4eO817WBn9Lw7DW2xpH8tywOkXJTsta9vNp7iQ2kYMbkez-ermCP8XJHwTAwZcDb2-wmQBPZFtM9X5vIk7W13WjIp6FB6Kfd-Z_2uBlCYOqF6G7VhPunA6yyyyt4Gn5I3LoT8eGLkXvE6vg_0L2z_LJXAZsqVX6sHlT1U3XmDyA-VSeovxtkUDdN",
    large: true,
  },
  {
    title: "Kebaya & Busana Tradisional",
    desc: "Menghormati warisan budaya dengan sentuhan modernitas dan detail premium.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCIMh2hEtAXmMZqH_tyX9wxbjvohQyJyt20k8T1_4MZZ6EaCc5cLhLiBnyD5cTvjuATWtKYC9IkgdqJMO-zqCemQL0r1vpFYMwnSbh3eFsa9wUqI0sIKutAEwgERrwIEJ02LIagWccKe9eomROiQ96ytXQKjs8zLbVYvswRQFlbwlFW0dDiOIFQX7Zr1TZLhKKFyWi_QR2h-0_fEVyVKJwjw8mr0mnRX9s1Ku5LesKZH7UvFoC1zVOdSpT26jZIrHCNWGe4_bw16zt7",
  },
  {
    title: "Seragam Korporat",
    desc: "Solusi identitas visual untuk instansi dan perusahaan modern.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCc1blg2p6LBOuaEgg1KuAbDwGLYyNa50A4CQgR1hVKvoUZPnTdXIo90LZybU1YrstKUpkUXZB60jQtSVOkWNJblEbPAA1UcCdLRS7HeuW4w1gEfd3UXbLjgPCdJ-V9tGgF7WerI7HRDDGgPk_RmPs3sfYkkKYrbP5zb1wqFkzYRlGSv5f5NLR9T8fATDu99uoIIyq6i9PgCRIdNQf4UIAZ7TgNuNIzviOapreGfVzjqOc2cmY717q25_WxrOV23uipLOUxvz-Yaxan",
  },
  {
    title: "Permak & Modifikasi",
    desc: "Berikan kehidupan baru pada pakaian favorit Anda dengan presisi tinggi.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAzneob_rQosihVsSfsmOR2TLwYog3LtHmxNj6-r2Fc0IAYuavR8b7VZkJxByHKqVSrRMT-o4pkm-JKav4RkwaSdbbUmL4bocQenF_tO_MoQ-m-s1DAIUGkVi5qQJHMYeSmk3oswZzmCnzVZesCy-w4s3UmZKLA47jlQGFf0IlCR9dSTIMGMNlIfpu-XQhbqsnR38fvmVDbFygB-b2rGlOlEJJ-USiYJhf3Yfzpm5NSyzASSXu__WqHVlESvCjgRVhN7Q-neFNXbXk4",
  },
];

const advantages = [
  {
    number: "01",
    title: "Konsultasi Personal",
    desc: "Memahami gaya hidup dan preferensi estetika setiap pelanggan.",
  },
  {
    number: "02",
    title: "Bahan Berkualitas",
    desc: "Menggunakan kain premium dari produsen terbaik dunia.",
  },
  {
    number: "03",
    title: "Ketepatan Waktu",
    desc: "Hasil terbaik dengan pengerjaan sesuai jadwal.",
  },
];

export default function KrawangTailorServices() {
  return (
    <div className="bg-[#fcf9f8] text-[#1c1b1b] min-h-screen">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex items-center justify-between">
          <h1 className="text-2xl md:text-4xl font-serif font-bold">
            Krawang Tailor
          </h1>

          <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest">
            <a href="/home">Home</a>
            <a href="/services" className="text-yellow-700 font-semibold">
              Services
            </a>
            <a href="/gallery">Gallery</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </div>

          <button className="bg-black text-white px-5 py-3 rounded-lg text-sm uppercase tracking-wider hover:scale-105 transition">
            Book Consultation
          </button>
        </div>
      </nav>

      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24 text-center">
        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">
          Layanan Tailoring Kami
        </h2>

        <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
          Dari setelan formal hingga busana tradisional eksklusif, kami
          menghadirkan kualitas jahitan tangan premium untuk setiap kebutuhan.
        </p>
      </section>

      {/* Bento Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Large Card */}
          <div className="md:col-span-8 group">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={services[0].image}
                alt=""
                className="w-full h-[500px] object-cover grayscale group-hover:grayscale-0 duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

              <div className="absolute bottom-8 left-8 text-white">
                <span className="uppercase tracking-widest text-yellow-400 text-sm">
                  {services[0].subtitle}
                </span>

                <h3 className="text-4xl font-serif font-bold mt-2">
                  {services[0].title}
                </h3>
              </div>
            </div>

            <p className="text-gray-600 mt-6 leading-relaxed text-lg">
              {services[0].desc}
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                "Jas Full Canvas",
                "Tuxedo Formal",
                "Blazer Tailored",
                "Kemeja Custom",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm md:text-base"
                >
                  <div className="w-3 h-3 bg-yellow-600 rounded-full"></div>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Side Card */}
          <div className="md:col-span-4 border rounded-2xl overflow-hidden group bg-white">
            <div className="overflow-hidden">
              <img
                src={services[1].image}
                alt=""
                className="w-full h-[420px] object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 duration-700"
              />
            </div>

            <div className="p-8">
              <h3 className="text-3xl font-serif font-bold mb-4">
                {services[1].title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {services[1].desc}
              </p>

              <button className="mt-6 text-yellow-700 uppercase tracking-widest text-sm border-b border-yellow-700">
                Lihat Koleksi →
              </button>
            </div>
          </div>

          {/* Bottom Cards */}
          {services.slice(2).map((service, index) => (
            <div
              key={index}
              className="md:col-span-6 border rounded-2xl overflow-hidden bg-white group"
            >
              <div className="flex flex-col md:flex-row h-full">
                <img
                  src={service.image}
                  alt=""
                  className="md:w-1/2 h-72 md:h-auto object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 duration-700"
                />

                <div className="p-8 flex flex-col justify-center md:w-1/2">
                  <h3 className="text-3xl font-serif font-bold mb-4">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Advantages */}
      <section className="bg-[#f0eded] py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-16">
              Keunggulan <br />
              <span className="text-yellow-700 italic">Krawang Tailor</span>
            </h2>

            <div className="space-y-10">
              {advantages.map((item) => (
                <div key={item.number} className="flex gap-6">
                  <div className="w-14 h-14 border border-yellow-700 flex items-center justify-center text-yellow-700 font-bold">
                    {item.number}
                  </div>

                  <div>
                    <h3 className="text-2xl font-serif font-semibold mb-2">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-2 border-yellow-700/20 p-6 rounded-2xl">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9Us8NLdHpA-2iidq9dtKvUOtd-Q_kc3TzWzp3EY9hjP7Qrlq53eBu7AVN8Xku5cka4i0Y7EN2U2ZaXna4pUQb_KJ23eXWEWmV-o85h8WEUM7Hiu_VnvO8q7wVMc6zTl9lsBcYSc-0DgqgXlujZ8QHTtNom96qt5nWpiEaFwCEqMKEjaz4YHd0eBl3dEKXPjDKIhQvEjYHRb9BbZrAWFalxGnGewR7DZQFYr5Beg282VLZCKnXbD_U1C2YeD_p2IcmMV6Qp6BE5Exs"
              alt=""
              className="w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h2 className="text-3xl font-serif font-bold text-yellow-400 mb-6">
              Krawang Tailor
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Dedikasi pada seni jahitan tangan selama lebih dari tiga dekade.
            </p>
          </div>

          <div>
            <h4 className="uppercase tracking-widest text-yellow-400 text-sm mb-6">
              Navigasi
            </h4>

            <ul className="space-y-3 text-gray-400">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Fabric Sourcing</li>
              <li>Our Process</li>
            </ul>
          </div>

          <div>
            <h4 className="uppercase tracking-widest text-yellow-400 text-sm mb-6">
              Kontak
            </h4>

            <p className="text-gray-400 leading-relaxed">
              Jl. Veteran No. 45
              <br />
              Jakarta Pusat, Indonesia
              <br />
              +62 21 555 0123
            </p>
          </div>

          <div>
            <h4 className="uppercase tracking-widest text-yellow-400 text-sm mb-6">
              Ikuti Kami
            </h4>

            <div className="flex gap-4">
              <div className="w-12 h-12 border border-white/20 rounded-lg flex items-center justify-center">
                🌐
              </div>

              <div className="w-12 h-12 border border-white/20 rounded-lg flex items-center justify-center">
                📷
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-500 mt-16 text-sm">
          © 2026 Krawang Tailor. Bespoke Excellence.
        </div>
      </footer>
    </div>
  );
}
