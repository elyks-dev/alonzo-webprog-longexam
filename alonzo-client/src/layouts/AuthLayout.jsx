import { Outlet, NavLink } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-[#35408e] flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-3xl border-2 border-[#ffd41c] bg-white/10 backdrop-blur-md p-6 text-white">
        {/* Tabs */}
        <div className="mb-6 flex justify-center gap-8 text-sm font-semibold uppercase tracking-wide">
          <NavLink
            to="/auth/signin"
            className={({ isActive }) =>
              isActive ? "text-[#ffd41c]" : "text-white/60 hover:text-[#ffd41c]"
            }
          >
            Sign In
          </NavLink>

          <NavLink
            to="/auth/signup"
            className={({ isActive }) =>
              isActive ? "text-[#ffd41c]" : "text-white/60 hover:text-[#ffd41c]"
            }
          >
            Sign Up
          </NavLink>
        </div>

        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
