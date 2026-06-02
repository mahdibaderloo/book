import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function AppLayout() {
  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto bg-gray-50">
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
}
