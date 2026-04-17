import Button from "./Button";

const ProductCard = ({ product, index }) => {
  return (
    <article className="rounded-3xl border-2 border-[#35408e] bg-[#f5f7ff] p-4">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-auto rounded-[1.25rem] object-cover aspect-4/3"
      />

      <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#4b5563]">
        {product.category} {String(index + 1).padStart(2, "0")}
      </p>

      <h3 className="mt-2 text-lg font-semibold text-[#1f2937]">
        {product.title}
      </h3>

      <p className="mt-2 text-base font-bold text-[#35408e]">{product.price}</p>

      <p className="mt-3 text-sm leading-6 text-[#4b5563]">
        {product.content[0].substring(0, 120)}...
      </p>

      <Button to={`/products/${product.name}`} className="mt-4">
        View Product
      </Button>
    </article>
  );
};

export default ProductCard;
