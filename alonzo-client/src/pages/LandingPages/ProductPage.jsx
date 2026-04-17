import { useParams } from "react-router-dom";
import Button from "../../components/Button.jsx";
import products from "../../assets/product-content.js";

function ProductPage() {
  const { name } = useParams();
  const product = products.find((product) => product.name === name);

  if (!product) {
    return (
      <div className="flex w-full flex-col gap-6 font-sans">
        <section className="border-y-2 border-[#35408e] bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-3xl font-bold text-[#1f2937]">
              Item not found
            </h1>
            <p className="mt-2 text-sm text-[#4b5563]">
              The product you are looking for may have been removed or is
              unavailable.
            </p>

            <Button to="/products" className="mt-6">
              Back to Shop
            </Button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-6 font-sans">
      <section className="border-y-2 border-[#35408e] bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-4">
            <Button to="/products">Back to Products</Button>
          </div>

          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#35408e]/70">
            {product.category}
          </p>

          <h1 className="text-3xl font-bold leading-tight text-[#1f2937] sm:text-4xl">
            {product.title}
          </h1>

          <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-[#4b5563]">
            <span className="font-bold text-[#1f2937]">{product.price}</span>
            <span>{product.stock}</span>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-[#35408e] bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {/* ✅ IMAGE FIX HERE */}
          <div className="mb-8 flex aspect-4/3 items-center justify-center rounded-[1.25rem] border-2 border-[#35408e] bg-[#f5f7ff] overflow-hidden">
            <img
              src={product.image}
              alt={product.title}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="space-y-4">
            {product.content.map((paragraph, index) => (
              <p
                key={index}
                className="text-base leading-7 text-[#4b5563] whitespace-pre-wrap"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-8 border-t-2 border-[#35408e] pt-6">
            <Button variant="primary" className="mr-3">
              Add to Cart
            </Button>
            <Button to="/products">Continue Shopping</Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductPage;
