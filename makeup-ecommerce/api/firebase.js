import { initializeApp } from "firebase/app";
import { collection, getDocs, getDoc, getFirestore, doc, addDoc } from "firebase/firestore";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  databaseURL: import.meta.env.VITE_DATABASEURL,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
  measurementId: import.meta.env.VITE_MEASUREMENTID
};

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

export async function createOrder(userInfo) {
  try {
    const resOrd = await addDoc(collection(db, "orders"), {
      userInfo,
      status: 'pending'
    })
    return resOrd.id
  } catch (e) {
    console.error(e);
  }
}
