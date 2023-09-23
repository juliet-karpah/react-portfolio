import Card from "../../ui/Card";


export default function Products(props) {
  return (
    <section className=" my-16">
      <div className="mx-8">
        <h2 className="font-bold"> OUR COLLECTION </h2>
        <div className="grid md:grid-cols-4 md:gap-4 gap-24">
          {props.productList.filter(el => !el.ad).map((prod) => (
            <Card
              key={prod.id}
              item={prod.id}
              src={prod.img}
              title={prod.title}
              price={`$${prod.price}`}
              alt={prod.alt}
              avgRating={prod["ratings"]["avgRatings"]}
              ratingsCount={prod["ratings"]["count"]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

