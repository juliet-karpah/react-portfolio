
import useUser from "../../hooks/useUser";

export default function ProtectedRoute({ children }) {

  const { isAuthenticated } = useUser();


  if (isAuthenticated) return children;
}
