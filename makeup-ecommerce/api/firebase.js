import { initializeApp } from "firebase/app";
import { collection, getDocs, getDoc, getFirestore, doc } from "firebase/firestore";
import { firebaseConfig } from "../config/firebase.js";

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export async function getAllProducts() {
  try {
    const productList = [];
    const querySnapshot = await getDocs(collection(db, "products"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      const id = doc.id
      productList.push({...doc.data(), id});
    });
    return productList;
  } catch (e) {
    console.error(e);
  }
}

export async function getProductById(id) {
  try {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      return data;
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  } catch (e) {
    console.error(e);
  }
}
