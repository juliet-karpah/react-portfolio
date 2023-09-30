import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";

export default function ProtectedRoute({ children }) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const data = queryClient.getQueryData(["user"]);
  const isAuthenticated = data?.role === "authenticated";

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated]);

  if (isAuthenticated) return children;
}
