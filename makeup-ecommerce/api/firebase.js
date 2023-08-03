import { initializeApp } from "firebase/app";
import { collection, getDocs, getDoc, getFirestore, doc, addDoc } from "firebase/firestore";
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
      const data = {...docSnap.data(), id};
      return data;
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  } catch (e) {
    console.error(e);
  }
}

export async function createOrder(db, orderItem, address) {
  try {
    const res = await addDoc(collection(db, "orderItems"), orderItem);
    console.log("Added document with ID: ", res.id)
    console.log("Add: ", res)
    const resOrd = await addDoc(collection(db, "orders"), {
      orderId: res.id,
      address,
      status: 'pending'
    })
    console.log("Added document with ID: ", resOrd.id)
    console.log("Add: ", resOrd)
  } catch (e) {
    console.error(e);
  }
}
