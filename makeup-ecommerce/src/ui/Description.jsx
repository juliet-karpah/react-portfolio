import { useState } from "react";

export default function Description(props) {
  const [openDescription, setOpenDescription] = useState(true);
  return (
    <section className="grid md:p-16 p-4 sm:grid-cols-2 my-36 sm:ml-12 ">
      <div className="w-full  flex flex-col gap-8 ad-bg h-[36rem]">
        <ul
          onClick={() => setOpenDescription(!openDescription)}
          className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-[#372316]"
        >
          <li className="mr-2">
            <button
              href="#"
              aria-current="page"
              className={`inline-block p-4 text-[#372316] hover:text-[#f0ebe5] hover:bg-[#a46941] rounded-t-lg ${
                openDescription && `active bg-[#a46941] text-[#f0ebe5]`
              }`}
            >
              Description
            </button>
          </li>
          <li className="mr-2">
            <button
              href="#"
              className={`inline-block p-4 text-[#372316] hover:text-[#f0ebe5] hover:bg-[#a46941] rounded-t-lg  ${
                !openDescription && `active bg-[#a46941] text-[#f0ebe5]`
              }`}
            >
              Ingredients
            </button>
          </li>
        </ul>
        {openDescription ? (
          <p>{props.description}</p>
        ) : (
          <p>{props.ingredients}</p>
        )}
      </div>
      <div className="w-full h-[36rem]">
        <img className="h-full object-cover" src={props.src} />
      </div>
    </section>
  );
}
