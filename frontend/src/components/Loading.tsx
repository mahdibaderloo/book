import loadingGif from "../assets/loading.gif";

export default function Loading() {
  return (
    <div className="w-full h-screen flex justify-center items-center fixed top-0 bg-white z-50 overflow-hidden">
      <img src={loadingGif} alt="loading..." />
    </div>
  );
}
