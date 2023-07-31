import { Link } from "react-router-dom";

export default function Ad() {
  return (
    <section className="grid grid-cols-2 my-36 mx-8 text-font gap-y-8">
      <div className="w-full p-16 flex flex-col gap-8 ad-bg">
        <h3 className="text-2xl"> Our Mission</h3>
        <p>
          {" "}
          Juliet Skin & Beauty strives to cover skin blemishes while healing the
          skin. The goal is to make products that protect and beautify all skin
          types. You no longer have to choose between coverage and nourishment.
        </p>
        <p className="text-sm"> - Juliet, Founder</p>
      </div>
      <div className="w-full">
        <img className="w-full" src="/other2.jpeg" />
      </div>

      <div className="justify-self-center">
        <img className="custom-height" src="/bbcream.png" alt="bb cream" />
      </div>
      <div className="w-full p-16 flex flex-col gap-8 self-center">
        <h3> The Best Seller.</h3>
        <p className="text-2xl">
          {" "}
          Glow with our most sort after bb cream. Protects skin with SPF
          50 and vitamin C.{" "}
        </p>

        <Link href="#" className="btn text-center">
          {" "}
          Buy Now{" "}
        </Link>
      </div>
    </section>
  );
}
