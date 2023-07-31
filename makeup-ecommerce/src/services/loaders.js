import { getAllProducts, getProductById} from "../../api/firebase.js";

export async function productsLoader() {
  try {
    const productList = await getAllProducts();
    return productList;
  } catch (e) {
    console.error(e);
  }
}

export async function productLoader(productId) {
  try {
    const product = await getProductById(productId);
    return product;
  } catch (e) {
    console.error(e);
  }
}
