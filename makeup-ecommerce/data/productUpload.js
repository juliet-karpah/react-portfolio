import { db } from "../api/firebase.js";
import { addDoc, collection } from "firebase/firestore";

export const productList = [
  {
    title: "Foundation",
    img: "/foundation.jpg",
    price: 30,
    alt: "makeup foundation",
    detail:
      "This is a powerful, streak-free foundation that smoothes and evens the skin with an advanced, innovative formula for a flawless, uniform natural matte finish.",
    ratings: {
      count: 1000,
      avgRatings: 4.5,
    },
    info: {
      description: `Woke Up Like This Foundation smooths and evens the look of skin with an advanced, innovative formula that instantly minimizes the appearance of shadows and pores, effortlessly enhances the complexion, and generates a flawless, natural-matte finish. 
        Easy buildability meets ultimate blendability in its ultra-fluid texture, becoming one with the skin for traceless, uniform, medium-to-high coverage.
       Special, optically-corrective powders blur the look of fine lines, redness, and blemishes, while light-diffusing spheres deflect attention from all imperfections.
        Once it settles, the lightweight formula wears comfortable and  streak-free.`,
      ingredients:
        "Aqua/water, Cyclopentasiloxane, Dimethicone, Isododecane, Talc, Peg-10 dimethicone, Ethylene/acrylic acid copolymer, Octocrylene, Alcohol denat, Peg-4, Isononyl isononanoate, Caprylyl dimethicone ethoxy glucoside, Polymethyl methacrylate, Myristyl lactate, Polysorbate 20, Sodium chloride, Disteardimonium hectorite, Cetyl dimethicone, Dimethicone/vinyl dimethicone crosspolymer, Benzyl alcohol, Sodium dehydroacetate, Hydrogen dimethicone, Silica, Magnesium aluminum silicate, Tocopheryl acetate, Triethoxycaprylylsilane, Aluminum hydroxide, Polymethylsilsesquioxane, Disodium edta, Biosaccharide gum-4, Sodium hyaluronate, Phenoxyethanol, Parfum / fragrance, Titanium dioxide.",
      img: "/foundationdetails.webp",
    },
  },
  {
    title: "Concealer",
    img: "/concealer.png",
    price: 50,
    alt: "makeup concealer",
    detail:
      "lightweight concealer that instantly covers under-eye circles, blemishes, dark spots & hyperpigmentation with an advanced vegan, cruelty-free, oil-free & paraben-free formula.",
    ratings: {
      count: 8000,
      avgRatings: 4.9,
    },
    info: {
      description: `This concealer has medium-to-full buildable coverage & long-lasting wear, yet is shockingly lightweight & comfortable thanks to its hydrating & moisturizing agents. Its unique, flexible applicator is specially designed to be the perfect touch-up tool, picking up just the right amount of product & distributing seamlessly to all parts of your face. You can use this concealer as a spot corrector, contour & to highlight & brighten up under-eyes. Bonus points: it has a smooth, even, matte finish that makes sure all evidence of last night’s questionable decisions (read: exhausted under-eye bags) remain your little secret.`,
      ingredients:
        "Water (aqua), Cyclopentasiloxane, Talc, Cetyl peg/ppg-10/1 dimethicone, Propylene glycol, Acrylates/dimethicone copolymer, Benzyl alcohol, Sodium chloride, Hydrogen dimethicone, Magnesium sulfate, Sodium dehydroacetate, Aluminum hydroxide, Dimethicone/vinyl dimethicone crosspolymer, Disteardimonium hectorite, Potassium sorbate, Dehydroacetic acid, Propylene carbonate, BHT, Tetrasodium edta. May contain: Titanium dioxide (ci 77891), Iron oxides (ci 77492), Iron oxides (ci 77491), Iron oxides (ci 77499).",
      img: "/concealerdetails.jpeg",
    },
  },

  {
    title: "Powder",
    img: "/powder.jpg",
    price: 50,
    alt: "makeup powder",
    detail:
      "An ultra-fine, lightweight pressed powder that perfects the appearance of skin, sets foundation, and provides matte coverage with a velvety smooth ‘no-powder’ finish.",

    ratings: {
      count: 800,
      avgRatings: 4.8,
    },
    info: {
      description: `An ultra-fine lightweight pressed powder that perfects and sets foundation for continuous coverage with a ‘no-powder’ finish. Made with micronized powders for shine-free wear, the advanced formulation softens the appearance of imperfections using light-diffusing technology for photo-perfect results. The gentle blend of minerals and extracts provide a natural luminosity, while absorbent powders leave a perfect matte finish.Featuring a silky texture that blends seamlessly, the product can be used alone to enhance complexion or over foundation as a setting powder. Comes in a portable mirrored case for easy on-the-go touch-ups.`,
      ingredients:
        "Squalane, Zinc stearate, Boron nitride, Silica, Kaolin, Zinc laurate, Sorbitan isostearate, Lauroyl lysine, Caprylyl glycol, 1,2-hexanediol, Sorbitan stearate, Potassium sorbate, Flavour (aroma), Chlorphenesin.",
      img: "/powderdetail.jpeg",
    },
  },

  {
    title: "Bronzer",
    img: "/bronze.jpg",
    price: 30,
    alt: "makeup bronzer",
    detail:
      "A streak-free mineral-baked bronzer to create an all-over instant sun-kissed look or to contour the face for the illusion of expertly sculpted, slim appearance.",
    ratings: {
      count: 600,
      avgRatings: 4.4,
    },
    info: {
      description: `A mineral-baked bronzer featuring an advanced, streak-free formula to create an instant all-over sun-kissed look, or to contour the face with expert sculpting and slimming effects. Baked on Italian terracotta tiles, pigments slowly fuse into marble-like swirls that blend and build the desired level of uniform bronze over untanned skin or enhance the existing tan gracefully.
        The finely-grinded silky powder creates a very light, breathable and uniformly colored film for a seamless, even finish. The soft-moving texture deeply fuses with both bare skin and foundation, allowing the formula to adhere to the skin with maximum grip and comfort all day long. Versatile and shape-shifting, this bronzer can be used wet or dry to create warmth, definition, and the desired tan intensity.`,
      ingredients:
        "Mica,Talc, Dimethicone, Isopropyl palmitate, Polysorbate 20, Acrylamide/sodium, Acryloyldimethylt-Urate copolymer, Magnesium aluminum silicate, Octyldodecyl stearoyl stearate, Cetearyl ethylhexanoate, Isohexadecane, Caprylyl glycol, Sorbitan stearate, Lauroyl lysine, Phenpxyethanol, Sodium dehydroacetate, Simmondsia chinesis (jojoba) seed oil, Tocopheryl acetate, Polysorbate 80, Hexylene glycol, Nylon-12, Tin oxide, Sorbitan oleate, Calcium sodium borosilicate, Synthetic fluorphlogopite, Calcium aluminum boro-silicate, Silica.",
      img: "/bronzerdetail.avif",
    },
  },
];

async function addDocument(db, prod) {
  try {
    const res = await await addDoc(collection(db, "products"), prod);
    console.log("Added document with ID: ", res.id)
    console.log("Add: ", res);
  } catch (e) {
    console.error(e);
  }
}

console.log(productList.forEach((prod) => addDocument(db, prod)));
