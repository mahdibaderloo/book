import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const isLogin = useSelector((state: RootState) => state.user.isLogin);

  return isLogin ? <>{children}</> : <Navigate to="/login" replace />;
}
