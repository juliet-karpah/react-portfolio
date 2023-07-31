import { Link } from "react-router-dom";
import Rating from "./Rating";

export default function Card(props) {
  return (
    <div>
      <Link to={`/product/${props.item}`}>
        <img className="w-full object-cover h-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" src={props.src} alt={props.alt} />
      </Link>
      <div className="text-xl font-bold flex justify-between">
        <h3> {props.title}
        </h3><p> {props.price} </p>
      </div>
      <Rating avgRating={props.avgRating} ratingsCount={props.ratingsCount}/>
    </div>
  );
}
