import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCWstS71m7g53GjV0dLUrdKFtfQqsVrJgU",
  authDomain: "projeto-lista-de-tarefas-ea486.firebaseapp.com",
  projectId: "projeto-lista-de-tarefas-ea486",
  storageBucket: "projeto-lista-de-tarefas-ea486.appspot.com",
  messagingSenderId: "382938916147",
  appId: "1:382938916147:web:3da89bc27e2ea2590f8a46",
  measurementId: "G-1B81K7FT10",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

const auth = getAuth(firebaseApp);

export { db, auth };
