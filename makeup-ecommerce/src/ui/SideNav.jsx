export default function SideDrawer(props) {
  return (
    <div
      id="drawer-right-example"
      className="absolute top-0 sm:w-2/5 right-0 z-40 h-screen p-4 ad-bg"
      tabIndex="-1"
      aria-labelledby="drawer-right-label"
    >
      <button className="float-right" onClick={props.onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 float-right"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {props.children}
    </div>
  );
}
