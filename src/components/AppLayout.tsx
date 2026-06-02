import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function AppLayout() {
  return (
    <>
      <Header />
      <main className="mx-auto bg-gray-50 pt-20">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
