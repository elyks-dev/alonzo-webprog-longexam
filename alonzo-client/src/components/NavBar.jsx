import { NavLink } from "react-router-dom";
import logo from "../assets/img/nubdexchange_logo.png";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products" },
];

const navLinkClassName = ({ isActive }) =>
  [
    "rounded-full border-2 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition",
    isActive
      ? "border-[#ffd41c] bg-[#ffd41c] text-[#35408e]"
      : "border-transparent text-white/80 hover:border-[#ffd41c] hover:bg-white/10 hover:text-[#ffd41c]",
  ].join(" ");

const NavBar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-[#ffd41c] bg-[#35408e]/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="BulldogEx"
            className="h-9 w-9 rounded-full border-2 border-[#ffd41c] bg-white object-contain"
          />
          <p className="text-xl font-bold text-[#ffd41c]">BulldogEx Shop</p>
        </NavLink>

        {/* Main Links */}
        <nav className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={navLinkClassName}
            >
              {link.label}
            </NavLink>
          ))}

          {/* ONLY AUTH ENTRY */}
          <NavLink
            to="/auth/signin"
            className="ml-4 rounded-full border-2 border-[#ffd41c] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#ffd41c] transition hover:bg-[#ffd41c] hover:text-[#35408e]"
          >
            Log in
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
