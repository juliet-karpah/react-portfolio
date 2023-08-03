import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import {
  emptyCart,
  getCartList,
  getCheckoutState,
  getTotalPrice,
  goToCheckout,
  removeItemFromCart,
  updateItemCart,
} from "./cartSlice";
import Modal from "../../ui/Modal";
import CheckoutForm from "../checkout/CheckoutForm";

export default function Cart() {
  const cartItems = useSelector(getCartList);
  const totalPrice = useSelector(getTotalPrice);
  const openCheckout = useSelector(getCheckoutState);
  const dispatch = useDispatch();

  return (
    <div className="mx-auto p-4 flex flex-col h-full justify-between">
      <section>
        <h2 className="font-bold"> Cart </h2>
        {cartItems.length > 0 ? (
          <div>
            {cartItems.map((item) => (
              <CartItem
                prod={item}
                key={item.id}
                changeQuantity={() => dispatch(updateItemCart(item.id))}
                remove={() => dispatch(removeItemFromCart(item.id))}
              />
            ))}
          </div>
        ) : (
          <h3 className="text-3xl md:text-3xl font-extrabold mt-16">
            {" "}
            Hello, there. Your cart is empty.{" "}
          </h3>
        )}
      </section>
      {cartItems.length > 0 && (
        <div className="flex justify-between">
          <button onClick={() => dispatch(goToCheckout(true))} className="btn">
            Submit order - Total {totalPrice}
          </button>
          <button className="btn" onClick={() => dispatch(emptyCart())}>
            Clear cart
          </button>
        </div>
      )}
      {openCheckout && (
      <Modal onClick={()=> dispatch(() => dispatch(goToCheckout(false)) )}>
      <CheckoutForm />
    </Modal>
      )}
    </div>
  );
}
