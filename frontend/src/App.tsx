import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Home from "./pages/Home";
import ShoppingCart from "./pages/ShoppingCart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Product from "./pages/Product";
import ProtectedRoute from "./components/ProtectedRoute";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/shopping-cart", element: <ShoppingCart /> },
      {
        path: "/dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
      { path: "/book/:id", element: <Product /> },
    ],
  },
]);

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />
      <Toaster
        position="top-center"
        toastOptions={{ className: "bg-gray-700 text-[0.65rem] font-medium" }}
      />
    </QueryClientProvider>
  );
}
