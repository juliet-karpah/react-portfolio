import { Link, useParams } from "react-router-dom";

export default function ConfirmationPage() {
  const { id } = useParams();

  return (
    <section className="ad-bg  text-color">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
        <div className="rounded-lg p-8 md:p-12 mb-8">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-2">
            Woohoo!!!
          </h1>
          <p className="text-lg font-normal  mb-6">
            Your Order #{id} is in progress. Look out for an email with a
            tracking number.
          </p>
          <Link
            to={"/"}
            className="inline-flex justify-center items-center btn"
          >
            Go Home
            <svg
              className="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
