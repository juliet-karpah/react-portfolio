export default function Start(props) {
  return (
    <section className="flex flex-col items-center start-section">
      <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-2xl lg:text-2xl">
        Practice the California Drivers Written Test!
      </h1>
      <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 dark:text-gray-400">
        {" "}
        You've got {props.count} questions to answer. Enter your name and click
        Start to begin.{" "}
      </p>
      <form onSubmit={props.submit} class="w-full max-w-md mx-auto">
        <label
          for="default-email"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Enter name
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
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
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </div>
          <input
            type="text"
            id="name"
            name="name"
            className="block w-full p-4 pl-10 text-sm text-black border border-gray-300 rounded-lg dark:border-gray-700 dark:placeholder-gray-400"
            placeholder="Enter your name here..."
            required
          />
          <button
            type="submit"
            className="start text-white absolute right-2.5 bottom-2.5 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
          >
            Start quiz
          </button>
        </div>
      </form>
    </section>
  );
}
