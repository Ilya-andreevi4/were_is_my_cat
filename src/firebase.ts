import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCjYJYoANLD9fSYh-zb6OlL-ZS2HpAio2s",
  authDomain: "database-for-games.firebaseapp.com",
  projectId: "database-for-games",
  storageBucket: "database-for-games.appspot.com",
  messagingSenderId: "554491032260",
  appId: "1:554491032260:web:14bb6470fdea50e4330f91",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export default app;
