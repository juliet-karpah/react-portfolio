import { useLoaderData } from "react-router-dom";
import Ad from "../../ui/Ad";
import FeaturedIn from "../../ui/FeaturedIn";
import Hero from "../../ui/Hero";
import Products from "../Products";


export default function Home() {
  const productList = useLoaderData();
  console.log(productList);
  return (
    <>
      <Hero />
      <FeaturedIn />
      <Products productList={productList} />
      <Ad />
    </>
  );
}


