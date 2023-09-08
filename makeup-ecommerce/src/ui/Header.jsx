import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCartList} from "../features/cart/cartSlice";

export default function Header() {
  const cartList = useSelector(getCartList);

  return (
    <header>
      <nav className="">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="#" className="flex items-center">
            <img
              src="/logo1.png"
              className="h-12 object-cover mr-3"
              alt="logo"
            />
          </Link>

          <div
            className="w-full block w-auto"
            id="navbar-solid-bg"
          >
            <ul className="flex gap-4">
              <li>
                <Link to="/" className="nav-link">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                </Link>
              </li>
              <li>
                <Link to="/cart" className="nav-link flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                  {cartList.length > 0 && <span> {cartList.length} </span>}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
