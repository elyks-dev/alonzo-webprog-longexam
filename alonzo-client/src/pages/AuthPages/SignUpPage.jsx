import { Link } from "react-router-dom";

const SignUpPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-[#ffd41c] mb-6">Create Account</h1>

      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Full Name"
          className="rounded-xl px-4 py-3 bg-white/20 text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-[#ffd41c]"
        />

        <input
          type="email"
          placeholder="Email"
          className="rounded-xl px-4 py-3 bg-white/20 text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-[#ffd41c]"
        />

        <input
          type="password"
          placeholder="Password"
          className="rounded-xl px-4 py-3 bg-white/20 text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-[#ffd41c]"
        />

        <button
          type="submit"
          className="rounded-xl bg-[#ffd41c] text-[#35408e] font-semibold py-3 hover:opacity-90 transition"
        >
          Create Account
        </button>
      </form>

      {/* TO SIGN IN */}
      <p className="mt-6 text-center text-sm text-white/70">
        Already have an account?{" "}
        <Link
          to="/auth/signin"
          className="font-semibold text-[#ffd41c] hover:underline"
        >
          Log in
        </Link>
      </p>
    </div>
  );
};

export default SignUpPage;
