import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../services/requests/api-auth";

export default function useUser() {
  const { data: user, isLoading } = useQuery({
    queryFn: getCurrentUser,
    querykey: ["user"],
  });

  return {user, isLoading, isAuthenticated:user?.role === "authenticated"};
}
