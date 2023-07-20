import Card from "./Card";

export default function Options(props) {
  return (
    <button className="w-full" onClick={props.onClick}>
      <Card customClass={`${props.className} option-bg max-xl:h-full text-md h-16 my-2 font-semibold text-black`} question={props.answer} />
    </button>
  );
}
