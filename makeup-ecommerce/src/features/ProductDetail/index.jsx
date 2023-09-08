import { useLoaderData } from "react-router-dom";
import Detail from "../../ui/Detail";
import Description from "../../ui/Description";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, closeCart, getCartState, openCart } from "../cart/cartSlice";
import SideDrawer from "../../ui/SideNav";
import Cart from "../cart/Cart";


export default function ProductDetail() {
  const product = useLoaderData();
  const dispatch = useDispatch();
  const cartOpen = useSelector(getCartState)


  function handleAddToCart() {
    const cartObj = {
      name: product["title"],
      img: product["img"],
      id: product["id"],
      unitPrice: product["price"],
      quantity: 1,
      get totalPrice() {
        return this.unitPrice * this.quantity;
      },
    };

    dispatch(addItemToCart(cartObj));
    dispatch(openCart())
  }

  return (
    <div>
      <section className="mx-12 grid md:grid-cols-2 justify-around mt-12 ">
        <Detail
          alt={product["alt"]}
          src={product["img"]}
          title={product["title"]}
          btnTitle={`Add to Cart - $${product["price"]}`}
          detail={product["detail"]}
          avgRating={product["ratings"]["avgRatings"]}
          ratingsCount={product["ratings"]["count"]}
          onClick={handleAddToCart}
        />
      </section>
      <Description
        src={product["info"]["img"]}
        description={product["info"]["description"]}
        ingredients={product["info"]["ingredients"]}
      />
      {cartOpen && (
        <SideDrawer onClick={()=> dispatch(closeCart())}>
          <Cart />
        </SideDrawer>
      )}
    </div>
  );
}
