import { useState } from "react";

export default function CartItem(props) {
  const prod = props.prod;
  const optionsList = [1, 2, 3, 4];
  const [currQ, setCurrQ] = useState(prod.quantity);

  function handleChange(e) {
    e.preventDefault();
    setCurrQ(e.target.value);
    props.changeQuantity();
  }

  return (
    <div className="flex justify-between py-8 border-t-2 border-gray-300 box-border">
      <div className="flex gap-4">
        <img className="h-[100px] w-[100px] object-cover" src={prod.img} />
        <p className="flex flex-col w-[100px]"> {prod.name} <span> ${prod.totalPrice} </span> </p>
      </div>

      <div>
        <select
          onChange={handleChange}
          id="quantity"
          className="btn bg-[#f0ebe5] h-[42px]"
          defaultValue={currQ}
        >
          {optionsList.map((value, i) => (
            <option value={value} key={i}>
              {" "}
              {value}{" "}
            </option>
          ))}
        </select>
      </div>

      <button onClick={props.remove} className="btn">
        {" "}
        remove{" "}
      </button>
    </div>
  );
}
