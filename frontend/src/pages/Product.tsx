import { useParams } from "react-router-dom";
import Button from "../components/Button";
import { useBook } from "../hooks/useBook";
import Loading from "../components/Loading";
import BackButton from "../components/BackButton";

export default function Product() {
  const { id } = useParams();
  const { data: book, isLoading } = useBook(Number(id));

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex max-w-4xl min-h-[calc(100vh-529px-120px)] mx-auto p-8">
      <section className="flex-1 p-2">
        <img
          src={book.imageUrl}
          alt="تصویر محصول"
          className="w-90 h-90 rounded-2xl shadow"
        />
      </section>
      <section className="flex-1 p-4">
        <BackButton />
        <div className="flex flex-col gap-4 pb-8 border-b-2 border-gray-300">
          <h3 className="font-semibold">{book.title}</h3>
          <p className="text-sm">{book.publisher}</p>
          <p className="text-sm">{book.description}</p>
        </div>
        <div className="pt-6">
          <p className="font-medium">{book.price.toLocaleString()}</p>
          <Button title="افزودن به سبد خرید" mt="8" width="60" />
        </div>
      </section>
    </div>
  );
}
