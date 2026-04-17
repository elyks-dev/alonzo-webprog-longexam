import Button from "../../components/Button";
import banner from "../../assets/img/nu_bulldogex_banner.jpg";

const HomePage = () => {
  return (
    <div className="flex w-full flex-col gap-6 font-sans">
      <section className="relative min-h-[28rem] overflow-hidden border-y-2 border-[#35408e] bg-[#35408e] px-4 py-10 sm:px-6 lg:px-8">
        <img
          src={banner}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-[#35408e]/50" />

        <div className="relative z-10 flex min-h-[22rem] items-start justify-end text-right">
          <div className="max-w-xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#ffd41c]">
              New Arrivals
            </p>

            <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
              Everything you need for campus life
            </h1>

            <p className="mt-4 text-sm leading-7 text-white/80">
              Shop essentials, supplies, and campus gear in one simple place
              built for students.
            </p>

            <div className="mt-6 flex flex-wrap justify-end gap-3">
              <Button to="/products">Shop Now</Button>
              <Button to="/about" variant="primary">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-[#35408e] bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#35408e]/70">
            Store Highlights
          </p>

          <h2 className="mt-2 text-2xl font-semibold text-[#1f2937]">
            Store at a glance
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["08", "Available Products"],
            ["06", "Product Categories"],
            ["24", "Completed Orders"],
            ["03", "Pickup Schedule"],
          ].map(([num, label]) => (
            <div
              key={label}
              className="rounded-3xl border-2 border-[#35408e] bg-[#f5f7ff] p-5"
            >
              <p className="text-2xl font-bold text-[#35408e]">{num}</p>
              <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#4b5563]">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y-2 border-[#35408e] bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#35408e]/70">
            Browse Categories
          </p>

          <h2 className="mt-2 text-2xl font-semibold text-[#1f2937]">
            Shop by category
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {[
            [
              "Everyday Essentials",
              "Daily-use items like bags, tumblers, and campus necessities.",
              "Shop Now",
              "/src/assets/img/products/roll-top-backpack.jpg",
            ],
            [
              "Study Materials",
              "Notebooks, pens, and tools for classes and review sessions.",
              "Browse Supplies",
              "/src/assets/img/products/grid-notebook.jpg",
            ],
            [
              "Campus Wear",
              "Comfortable clothing for school days and campus activities.",
              "Explore Apparel",
              "/src/assets/img/products/graphic-tee.jpg",
            ],
          ].map(([title, desc, btn, image]) => (
            <article
              key={title}
              className="rounded-3xl border-2 border-[#35408e] bg-[#f5f7ff] p-4"
            >
              <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] overflow-hidden bg-white border border-[#35408e]/20">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[#1f2937]">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#4b5563]">{desc}</p>
              <Button to="/products" className="mt-4" variant="primary">
                {btn}
              </Button>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
