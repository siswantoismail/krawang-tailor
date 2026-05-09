import {
  Scissors,
  Phone,
  Mail,
  Share2,
  MessageCircle,
  Ruler,
  User,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router";

export default function KrawangTailorAbout() {
  return (
    <div className="bg-[#fcf9f8] text-[#1c1b1b] overflow-x-hidden">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <nav className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
          <h1 className="text-2xl md:text-4xl font-bold tracking-wide">
            Krawang Tailor
          </h1>

          <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest font-semibold">
            <Link to="/home" className="hover:text-yellow-700 transition">
              Home
            </Link>
            <Link to="/services" className="hover:text-yellow-700 transition">
              Services
            </Link>
            <Link to="/gallery" className="hover:text-yellow-700 transition">
              Gallery
            </Link>
            <Link
              to="/about"
              className="text-yellow-700 border-b border-yellow-700"
            >
              About
            </Link>
            <Link to="/contact" className="hover:text-yellow-700 transition">
              Contact
            </Link>
          </div>

          <button className="bg-black text-white px-5 py-3 text-sm uppercase tracking-widest hover:bg-gray-800 transition rounded-md">
            Book Consultation
          </button>
        </nav>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="uppercase tracking-[0.2em] text-yellow-700 font-semibold text-sm">
              Warisan dan Presisi
            </span>

            <h2 className="text-4xl md:text-6xl font-bold leading-tight mt-5">
              Dedikasi Terhadap Seni Menjahit Tradisional
            </h2>

            <p className="text-gray-600 mt-8 text-lg leading-relaxed max-w-xl">
              Di Krawang Tailor, setiap jahitan adalah sebuah janji akan
              keunggulan. Kami melampaui sekadar pakaian; kami menciptakan
              identitas melalui presisi tangan yang tak tertandingi.
            </p>
          </div>

          <div className="relative">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsbimWOATCH8i9QkCfspnrDH_aW3s6Ij_nFNI5AAMNjeYPi5jFLk3L9VfGVQJoRYr3d_g9RjgFjviXj5b4J163xOT_hXYYwNvsmDawf-Y8druTRveuY-PdjhjnR6nMPkBnPOSLinSVggivAh8gqdokvlZDu0JpWt02W-J5V6FHMj689bB4Vo4XaTUuM_gZWgT_KlyAy46oxfDghaztUkvSjhSeQVPQjkzbBNIQ2nXTWxISoLXwkBsuZRaJ8_bE8Z9Cioa2yltcA9Tu"
              alt="Tailor"
              className="w-full h-[650px] object-cover rounded-2xl shadow-2xl"
            />

            <div className="hidden md:block absolute -bottom-8 -left-8 bg-white p-8 rounded-xl shadow-xl">
              <h3 className="text-4xl font-bold">25+</h3>
              <p className="uppercase tracking-widest text-sm text-yellow-700 mt-2">
                Tahun Pengalaman
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="bg-[#f3f0ef] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 bg-white p-10 rounded-2xl shadow-sm">
            <h3 className="text-3xl font-bold mb-5">Visi Kami</h3>

            <p className="text-gray-600 leading-relaxed text-lg">
              Krawang Tailor lahir dari kecintaan terhadap struktur dan
              estetika. Kami percaya bahwa setiap orang layak mengenakan busana
              yang dirancang khusus sesuai anatomi dan karakter unik mereka.
            </p>
          </div>

          <div className="bg-black text-white p-10 rounded-2xl flex flex-col justify-end">
            <Scissors className="w-12 h-12 text-yellow-400 mb-6" />

            <h4 className="text-2xl font-semibold mb-4">Keahlian Tangan</h4>

            <p className="text-gray-300">
              Hanya pengrajin ahli terpilih yang dipercayakan menangani material
              eksklusif kami.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQOp8nlQ3k9UjZ0tyxR580z0wQcPo54IyWlxgQuL0hKdEluYuo4q3KsGoksc5qCABzIvE7bwRfw7gO8EwHguWQvCBLR-OokPSigb4EpS_IleB5Is6W1C_uhpbWunmrw7xF4b8joX2pEFIcB3J0wlOH2yu_UgeABc2kTXqQzm-m4Y0HcCuG71efLlt2Re-HO2eXyN2JYbaOC2jZL84rN4kxVzVwic_08fSvKA6cmidUD4SiqAjpGHqhBi_U7bdFGeuuhOKGajBB6IlA"
              alt="Tools"
              className="w-full h-56 object-cover rounded-xl mb-6"
            />

            <h4 className="text-2xl font-semibold mb-3">Presisi Mutlak</h4>

            <p className="text-gray-600">
              Sistem pengukuran 32 titik memastikan fit sempurna sejak fitting
              pertama.
            </p>
          </div>

          <div className="md:col-span-2 relative rounded-2xl overflow-hidden">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4LFYtngI3heV8nyddyK9g6q-tkG1CIu0q1GlJjIPjikasFQKDY2QLnldyDxHFnoLncLcmcYqMOUlNA53Px9t-huYWBgFaXjMvwNpEVgNqtBZVTVeeGpCvsmlrZyVlhepgr3YNVSru3XH8Bw4SGeDBHdr8Uyprtue4FZoPQ3DSsBUJhflyqDJ6ERH2tUSRqMGFWI_cdCXyNM_YEi7GJTEW3bCMYbdAMBEz_NcKIwRjKfm2VUVT-0HLSvQ6h1vhFlilDZMryJlq5i16"
              alt="Fabric"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-8">
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl max-w-md text-center">
                <h4 className="text-2xl font-bold mb-4">Kurasi Material</h4>

                <p className="text-gray-700">
                  Kami bekerja sama dengan penenun terbaik dunia untuk
                  menghadirkan kain berkualitas tanpa kompromi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <span className="uppercase tracking-[0.2em] text-yellow-700 text-sm font-semibold">
            Metode Kami
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Proses Pembuatan Mahakarya
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-10">
          {[
            {
              icon: <MessageCircle />,
              step: "01. Consultation",
              title: "Konsultasi",
              desc: "Diskusi mengenai gaya, acara, dan preferensi material.",
            },
            {
              icon: <Ruler />,
              step: "02. Measurement",
              title: "Pengukuran",
              desc: "Pengambilan data anatomi tubuh secara detail.",
            },
            {
              icon: <User />,
              step: "03. Fitting",
              title: "Fitting",
              desc: "Penyesuaian draft pakaian untuk hasil terbaik.",
            },
            {
              icon: <CheckCircle />,
              step: "04. Final Stitch",
              title: "Jahitan Akhir",
              desc: "Penyelesaian detail tangan yang halus dan presisi.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="text-center group hover:-translate-y-2 transition duration-300"
            >
              <div className="w-20 h-20 mx-auto border border-yellow-700 rounded-full flex items-center justify-center mb-6 group-hover:bg-yellow-700 group-hover:text-white transition">
                {item.icon}
              </div>

              <span className="uppercase tracking-widest text-sm text-gray-500">
                {item.step}
              </span>

              <h4 className="text-2xl font-semibold mt-3 mb-4">{item.title}</h4>

              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCow_2JfjWUW_-xNxGJtjdRPJmgzbhYrWTrt2enQ7_VgByZHc9WDt8aUH5KYQ_4aiTw6Y3ShZkMqUcpZ3769pbZFroDoyd8h-n-42Po1iePeUV6pBHo3dyMcfMrNKeYk5yK9RWCSPt65q7CLLSXnRDSEA06gD8huToupZ8eBjbdHNgwWQnC4tTdorcCCI1QFhBCX2tvRcwbaKyDR8OFnmXE-ePWb6AcWkjTRuc7rRT04MRyCmNUi5a9vplA9muJfey25V4L2YF1lXOY"
              alt="Master Tailor"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>

          <div>
            <span className="uppercase tracking-[0.2em] text-yellow-400 text-sm font-semibold">
              Tim Kami
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
              Ahli Waris Keahlian
            </h2>

            <p className="text-gray-300 mt-8 text-lg leading-relaxed">
              Dibalik setiap jas Krawang Tailor terdapat tim penjahit generasi
              ketiga yang telah mengasah kemampuan mereka selama puluhan tahun.
            </p>

            <div className="grid grid-cols-2 gap-8 mt-10 border-t border-gray-700 pt-10">
              <div>
                <h4 className="text-2xl font-semibold mb-3">Hand-Cut</h4>
                <p className="text-gray-400">
                  Pemotongan pola dilakukan manual untuk presisi maksimal.
                </p>
              </div>

              <div>
                <h4 className="text-2xl font-semibold mb-3">Hand-Finished</h4>
                <p className="text-gray-400">
                  Finishing detail dikerjakan sepenuhnya dengan tangan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
          Siap Untuk Memulai Perjalanan Gaya Anda?
        </h2>

        <p className="text-gray-600 mt-8 text-lg max-w-2xl mx-auto">
          Jadwalkan konsultasi pribadi Anda hari ini dan rasakan perbedaan
          tailoring yang sesungguhnya.
        </p>

        <div className="flex flex-col md:flex-row gap-5 justify-center mt-10">
          <button className="bg-black text-white px-10 py-5 uppercase tracking-widest rounded-md hover:bg-gray-800 transition">
            Book Consultation
          </button>

          <button className="border border-yellow-700 text-black px-10 py-5 uppercase tracking-widest rounded-md hover:bg-yellow-100 transition">
            View Collections
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 grid md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-3xl font-bold text-yellow-400 mb-5">
              Krawang Tailor
            </h3>

            <p className="text-gray-400">
              Bespoke excellence since 1999. Crafted for the discerning
              individual.
            </p>
          </div>

          <div>
            <h4 className="uppercase tracking-widest text-sm mb-6">Services</h4>

            <ul className="space-y-4 text-gray-400">
              <li>Bespoke Suits</li>
              <li>Custom Shirts</li>
              <li>Wedding Wear</li>
              <li>Alterations</li>
            </ul>
          </div>

          <div>
            <h4 className="uppercase tracking-widest text-sm mb-6">Explore</h4>

            <ul className="space-y-4 text-gray-400">
              <li>Our Process</li>
              <li>Fabric Sourcing</li>
              <li>Gallery</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div>
            <h4 className="uppercase tracking-widest text-sm mb-6">Visit Us</h4>

            <p className="text-gray-400">Jl. Kemang Raya No. 45</p>
            <p className="text-gray-400 mb-6">Jakarta Selatan, Indonesia</p>

            <div className="flex gap-5 text-yellow-400">
              <Phone />
              <Mail />
              <Share2 />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 py-6 text-center text-gray-500 text-sm">
          © 2024 Krawang Tailor. Bespoke Excellence.
        </div>
      </footer>
    </div>
  );
}
