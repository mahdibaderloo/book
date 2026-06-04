import loadingGif from "../assets/loading.gif";

export default function Loading() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <img src={loadingGif} alt="loading..." />
    </div>
  );
}
