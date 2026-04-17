import Button from "../components/Button";

const NotFoundPage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      {/* 404 Section */}
      <section className="border-y-2 border-[#ffd41c] bg-[#35408e]/70 backdrop-blur-md px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#ffd41c]">
            Error
          </p>

          <h1 className="text-7xl font-bold text-white sm:text-8xl">404</h1>

          <p className="mt-4 text-lg text-white/80">
            Page not found. The page you're looking for doesn't exist or has
            been moved.
          </p>

          <div className="mt-6 flex justify-center gap-3">
            <Button to="/">Back Home</Button>
            <Button to="/products">View Products</Button>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="border-y-2 border-[#ffd41c] bg-[#35408e]/60 backdrop-blur-md px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#ffd41c]">
            Quick Links
          </p>

          <h2 className="mt-2 text-2xl font-semibold text-white">
            Explore the site
          </h2>

          <div className="mt-6 space-y-4">
            <div className="rounded-3xl border-2 border-[#ffd41c] bg-white/10 p-5 backdrop-blur-md">
              <h3 className="font-semibold text-[#ffd41c]">Home</h3>
              <p className="mt-1 text-sm text-white/80">
                Return to the homepage
              </p>
              <Button to="/" className="mt-3">
                Go Home
              </Button>
            </div>

            <div className="rounded-3xl border-2 border-[#ffd41c] bg-white/10 p-5 backdrop-blur-md">
              <h3 className="font-semibold text-[#ffd41c]">Products</h3>
              <p className="mt-1 text-sm text-white/80">
                Browse all featured store items
              </p>
              <Button to="/products" className="mt-3">
                View Products
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFoundPage;
