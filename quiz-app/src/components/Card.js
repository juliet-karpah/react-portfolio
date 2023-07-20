export default function Card(props) {
  return (
    <div
      className={`${props.customClass} block w-11/12 p-6 bg-white border border-gray-200 rounded-lg shadow`}
    >
        <h5 className="tracking-tight ">
          {props.question}
        </h5>  
    </div>
  );
}
