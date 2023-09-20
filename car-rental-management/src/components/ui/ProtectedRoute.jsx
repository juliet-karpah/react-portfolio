import { useEffect } from "react";
import useUser from "../../hooks/useUser";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  const { isAuthenticated, isLoading } = useUser();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      navigate("/login");
    }
  }, [isAuthenticated, isLoading, navigate]);
  
  if (isLoading) return <div>Loading ...</div>;



  if (isAuthenticated) return children;
}
