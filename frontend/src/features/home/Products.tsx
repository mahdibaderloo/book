import Loading from "../../components/Loading";
import { useBooks } from "../../hooks/useBooks";
import ProductItem from "./ProductItem";

export default function Products() {
  const { data: books, isLoading, error } = useBooks();

  if (isLoading) {
    return <Loading />;
  }
  console.log(error);

  return (
    <div className="mt-4 p-4 max-w-6xl mx-auto scroll-mt-24" id="products">
      <p className="border-r-4 border-orange-300 pb-1 pr-1 text-sm font-semibold">
        محصولات
      </p>
      <ul className="flex justify-center items-center flex-wrap gap-2 mt-8">
        {books?.map((book) => (
          <ProductItem key={book.id} book={book} />
        ))}
      </ul>
    </div>
  );
}
