import {  useSelector, useDispatch } from "react-redux";
import { useFetcher, json, useNavigate } from "react-router-dom";
import { getCartList, emptyCart } from "../cart/cartSlice";
import { createOrder } from '../../../api/firebase';
import { useEffect } from "react";


export default function CheckoutForm() {
  const fetcher = useFetcher();
  const cartList = useSelector(getCartList);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() =>{
    const data = (fetcher.state === "idle" && fetcher.data) && fetcher.data
    if(data){
        dispatch(emptyCart());
        navigate(`/confirmation/${data}`)
    }
  }, [fetcher])

  return (
    <fetcher.Form method="POST">
      <div className="relative z-0 w-full mb-6 group">
        <input
          type="email"
          name="user_email"
          id="user_email"
          className="block py-2.5 px-0 w-full  bg-transparent border-0 border-b-2 border-[#372316] appearance-none d focus:outline-none focus:ring-0 focus:border-[#372316] peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="user_email"
          className="peer-focus:font-medium absolute duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#372316] peer-focus:dark:text-[#372316] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Email address
        </label>
      </div>

      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="first_name"
            id="first_name"
            className="block py-2.5 px-0 w-full bg-transparent border-0 border-b-2 border-[#372316] appearance-none   focus:outline-none focus:ring-0 focus:border-[#372316] peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="first_name"
            className="peer-focus:font-medium absolute duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#372316] peer-focus:dark:text-[#372316] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            First name
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="last_name"
            id="last_name"
            className="block py-2.5 px-0 w-full bg-transparent border-0 border-b-2 border-[#372316] appearance-none  focus:outline-none focus:ring-0 focus:border-[#372316] peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="last_name"
            className="peer-focus:font-medium absolute duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#372316] peer-focus:dark:text-[#372316] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Last name
          </label>
        </div>
      </div>
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="tel"
            pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
            name="phone"
            id="phone"
            className="block py-2.5 px-0 w-full bg-transparent border-0 border-b-2 border-[#372316] appearance-none  focus:outline-none focus:ring-0 focus:border-[#372316] peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="phone"
            className="peer-focus:font-medium absolute duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#372316] peer-focus:dark:text-[#372316] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Phone number (1234567890)
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="address"
            id="address"
            className="block py-2.5 px-0 w-full bg-transparent border-0 border-b-2 border-[#372316] appearance-none d focus:outline-none focus:ring-0 focus:border-[#372316] peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="address"
            className="peer-focus:font-medium absolute duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#372316] peer-focus:dark:text-[#372316] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            {" "}
            Address
          </label>
        </div>
        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cartList)} />
        </div>
      </div>
      <button type="submit" className="btn">
        Submit Order
      </button>
    </fetcher.Form>
  );
}

export async function action({ request }) {
  const form = new URLSearchParams(await request.text());

  const userInfo = {
    email: form.get("user_email"),
    first_name: form.get("first_name"),
    last_name: form.get("last_name"),
    phone: form.get("phone"),
    address: form.get("address"),
    cart: form.get("cart")
  };

  let res;
  try{
    res = await createOrder(userInfo)
  }catch(e){
    console.error(e)
  }
  return json(res)
}
