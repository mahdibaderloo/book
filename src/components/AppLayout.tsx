import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function AppLayout() {
  const { pathname } = useLocation();
  const isLoginPage =
    pathname.includes("login") ||
    pathname.includes("signup") ||
    pathname.includes("dashboard");

  return (
    <>
      {!isLoginPage && <Header />}
      <main className={!isLoginPage ? `mx-auto bg-gray-50 pt-20` : undefined}>
        <Outlet />
      </main>
      {!isLoginPage && <Footer />}
    </>
  );
}
