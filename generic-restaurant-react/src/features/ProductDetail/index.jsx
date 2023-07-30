import { useLoaderData} from "react-router-dom";
import Detail from "../../ui/Detail";
import Description from "../../ui/Description";



export default function ProductDetail() {
   const product = useLoaderData()
  
  return (
    <div>
      <section className="mx-12 grid grid-cols-2 justify-around mt-12">
        <Detail
          alt={product["alt"]}
          src={product["img"]}
          title={product["title"]}
          btnTitle={`Add to Cart - $${product["price"]}`}
          detail={product["detail"]}
          avgRating={product["ratings"]["avgRatings"]}
          ratingsCount={product["ratings"]["count"]}
        />
      </section>
      <Description src={product['info']['img']} description={product['info']['description']} ingredients={product['info']['ingredients']} />
    </div>
  );
}
