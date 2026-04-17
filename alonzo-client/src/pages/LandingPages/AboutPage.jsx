import Button from "../../components/Button";
import logo from "../../assets/img/nubdexchange_logo.png";

const AboutPage = () => {
  return (
    <div className="flex w-full flex-col gap-6 font-sans text-[#1f2937]">
      <section className="border-y-2 border-[#35408e] bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="rounded-3xl border-2 border-dashed border-[#35408e]/30 bg-[#f5f7ff] p-6">
            <div className="flex min-h-72 items-center justify-center rounded-[1.25rem] bg-white">
              <img
                src={logo}
                alt="BulldogEx"
                className="h-32 w-32 rounded-full border-2 border-[#35408e] bg-white object-contain"
              />
            </div>
          </div>

          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#35408e]/70">
              About Our Store
            </p>

            <h1 className="max-w-xl text-3xl font-bold leading-tight text-[#1f2937] sm:text-4xl">
              Your one-stop shop for campus essentials
            </h1>

            <p className="mt-4 max-w-lg text-sm leading-7 text-[#4b5563] sm:text-base">
              We provide students with easy access to essential products, study
              materials, and campus gear in one simple platform.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/" variant="primary">
                Back Home
              </Button>
              <Button to="/products">Start Shopping</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-[#35408e] bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#35408e]/70">
            Store Insights
          </p>

          <h2 className="mt-2 text-2xl font-semibold text-[#1f2937]">
            Business overview
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["08", "Products"],
            ["06", "Categories"],
            ["03", "Pickup Slots"],
            ["24", "Orders"],
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
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#35408e]/70">
              How It Works
            </p>

            <h2 className="mt-2 text-2xl font-semibold text-[#1f2937]">
              Simple shopping process
            </h2>

            <div className="mt-6 space-y-4">
              {[
                [
                  "Browse Products",
                  "Explore categories and find what you need quickly.",
                ],
                ["Place Orders", "Add items to cart and checkout with ease."],
                ["Pick Up", "Collect your order at your selected schedule."],
              ].map(([title, desc]) => (
                <article
                  key={title}
                  className="rounded-3xl border-2 border-[#35408e] bg-[#f5f7ff] p-5"
                >
                  <h3 className="text-lg font-semibold text-[#1f2937]">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#4b5563]">
                    {desc}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border-2 border-[#35408e] bg-[#f5f7ff] p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#35408e]/70">
              Categories
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                {
                  name: "Bags",
                  image: "/src/assets/img/products/roll-top-backpack.jpg",
                },
                {
                  name: "Stationery",
                  image: "/src/assets/img/products/grid-notebook.jpg",
                },
                {
                  name: "Drinkware",
                  image: "/src/assets/img/products/eco-bamboo-water-bottle.jpg",
                },
                {
                  name: "Tech",
                  image: "/src/assets/img/products/portable-usb-charger.jpg",
                },
              ].map((category) => (
                <div
                  key={category.name}
                  className="relative overflow-hidden rounded-[1.25rem] aspect-square"
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent">
                    <p className="p-3 font-semibold text-white text-sm">
                      {category.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button to="/products" className="mt-5" variant="primary">
              Browse All Products
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
