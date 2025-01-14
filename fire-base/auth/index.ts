import { getAuth } from "firebase/auth";
import firebaseApp from "@/fire-base";

const firebaseAuth = getAuth(firebaseApp);

export default firebaseAuth;
