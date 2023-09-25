import { useEffect } from "react";
import useUser from "../../hooks/useUser";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  const { isAuthenticated, isLoading } = useUser();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      console.log(isAuthenticated, isLoading)
      navigate("/login");
    }else{
      navigate("/metrics")
    }
  }, [isAuthenticated, isLoading, navigate]);

  if (isAuthenticated) return children;
}
