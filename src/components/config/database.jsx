import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

const firebaseConfig = {
  apiKey: "AIzaSyDr5_UMe5KAyVBOOGmF3y2AODgLBDnG3s0",
  authDomain: "project-variety.firebaseapp.com",
  projectId: "project-variety",
  storageBucket: "project-variety.appspot.com",
  messagingSenderId: "394035243254",
  appId: "1:394035243254:web:89cc849b04e4c86131a4d7"
};

const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);
export const storage = getStorage(app);

export const saveFile = async (file) => {
    const uploadFile = ref(storage, v4());
    await uploadBytes(uploadFile, file);
    const urlFile = await getDownloadURL(uploadFile);
    return urlFile;
};