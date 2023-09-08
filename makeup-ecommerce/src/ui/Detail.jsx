import Rating from "./Rating";

export default function Detail(props) {
  return (
    <>
      <div>
        <img className="w-[36rem] object-cover" src={props.src} alt={props.alt} />
      </div>
      <div className="flex flex-col gap-8 md:px-16">
        <h3 className="font-bold"> {props.title}</h3>
        <Rating avgRating={props.avgRating} ratingsCount={props.ratingsCount} />
        <p className="text-md">{props.detail}</p>

        <button href="#" className="btn text-center" onClick={props.onClick}>
          {" "}
          {props.btnTitle}
        </button>
      </div>
    </>
  );
}
