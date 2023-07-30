import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-36">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 ">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link>
            <img className="h-12 object-cover mr-3" src="/logo.png" alt="logo" />
          </Link>
          <nav>
          <ul className="flex flex-wrap items-center mb-6 text-md font-bold text-font">
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact</a>
                </li>
            </ul>
          </nav>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-sm  sm:text-center ">
          © 2023{" "}
          <a href="/" className="hover:underline">
            Juliet Skin & Beauty™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
