const Footer = () => {
  return (
    <footer className="border-t-2 border-[#ffd41c] bg-[#35408e]/70 backdrop-blur-md px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xl font-bold text-[#ffd41c]">BulldogEx Shop</p>
          <p className="mt-1 text-sm text-white/80">
            Campus essentials, simple ordering.
          </p>
        </div>

        <div className="flex gap-6 text-sm text-white/80">
          <a href="/" className="hover:text-[#ffd41c] transition">
            Home
          </a>
          <a href="/about" className="hover:text-[#ffd41c] transition">
            About
          </a>
          <a href="/products" className="hover:text-[#ffd41c] transition">
            Products
          </a>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-6xl text-center text-xs text-white/60">
        © {new Date().getFullYear()} BulldogEx Shop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
