import { firestore } from "@/lib/firebase/init";
import { collection, getDocs, query, where } from "firebase/firestore";

export async function login(email: string) {
  const q = query(collection(firestore, "users"), where("email", "==", email));

  const snapshot = await getDocs(q);
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  if (data) {
    return data[0];
  } else {
    return null;
  }
}
