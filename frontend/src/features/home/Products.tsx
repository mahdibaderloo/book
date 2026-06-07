import { useSearchParams } from "react-router-dom";
import Loading from "../../components/Loading";
import { useBooks } from "../../hooks/useBooks";
import type { Book } from "../../types/types";
import ProductItem from "./ProductItem";

export default function Products() {
  const [searchParams] = useSearchParams();
  const { data: books, isLoading } = useBooks(searchParams.get("search") || "");
  console.log(books);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="mt-4 p-4 max-w-6xl mx-auto scroll-mt-24" id="products">
      <p className="border-r-4 border-orange-300 pb-1 pr-1 text-sm font-semibold">
        محصولات
      </p>
      <ul className="flex justify-center items-center flex-wrap gap-2 mt-8">
        {books?.map((book: Book) => (
          <ProductItem key={book.id} book={book} />
        ))}
      </ul>
    </div>
  );
}
