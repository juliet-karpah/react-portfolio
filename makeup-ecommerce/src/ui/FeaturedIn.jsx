const logos = [
  "/voguelogo.png",
  "/forbeslogo.png",
  "/bazaarlogo.png",
  "/cosmologo.png",
];
export default function FeaturedIn() {
  return (
    <section>
      <div className="flex m-8 flex-col ">
        <h2 className="text-xl font-medium self-center featured-text"> AS FEATURED IN </h2>
        <div className="flex justify-around sm:flex-row flex-col">
          {logos.map((l, i) => (
            <img className="md:h-16 logo-img" src={l} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
