import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";
import { useNavigation } from "react-router-dom";
import Spinner from "./Spinner";

export default function Layout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <>
      <Header />
      {isLoading && <Spinner />}
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
