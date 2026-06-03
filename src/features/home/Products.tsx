import ProductItem from "./ProductItem";

export default function Products() {
  return (
    <div className="mt-4 p-4 max-w-6xl mx-auto scroll-mt-24" id="products">
      <p className="border-r-4 border-orange-300 pb-1 pr-1 text-sm font-semibold">
        محصولات
      </p>
      <ul className="flex justify-center items-center flex-wrap gap-2 mt-8">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </ul>
    </div>
  );
}
