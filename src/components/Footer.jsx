export default function Footer() {
  return (
    <footer className="bg-[#111] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h3 className="text-3xl font-bold mb-5">Krawang Tailor</h3>

          <p className="text-gray-400 leading-relaxed">
            Jahitan berkualitas premium dengan sentuhan elegan dan modern.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-5 uppercase tracking-widest">Services</h4>

          <ul className="space-y-3 text-gray-400">
            <li>Custom Suits</li>
            <li>Wedding Attire</li>
            <li>Formal Shirts</li>
            <li>Alterations</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-5 uppercase tracking-widest">Company</h4>

          <ul className="space-y-3 text-gray-400">
            <li>Our Process</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-5 uppercase tracking-widest">Contact</h4>

          <ul className="space-y-3 text-gray-400">
            <li>Jl. Kebangsaan No. 42</li>
            <li>info@krawangtailor.com</li>
            <li>+62 21 555 1234</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 mt-14 pt-6 text-center text-gray-500 text-sm px-4">
        © 2026 Krawang Tailor. Bespoke Excellence.
      </div>
    </footer>
  );
}
