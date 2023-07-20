export default function ProgressBar(props) {
  const width = (props.index / props.len) * 100;
  console.log(width)
  return (
    <>
      <div className="mt-16 bg-gray-600 rounded-full h-2.5" style={{ width: "90%" }}>
        <div
          className="start h-2.5 rounded-full"
          style={{ width: `${width}%` }}
        ></div>
      </div>
      <p> {props.index}/{props.len} </p>
    </>
  );
}
