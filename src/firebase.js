//Traer firebase
import firebase from "firebase/app"

//Traer el servicio de firestore
import "firebase/firestore";


//Inicializar el servicio
const firebaseConfig = {
apiKey: "AIzaSyDbOKnQIZsLCwm_YQAYrnTLxkRqoN_0xsk",
authDomain: "coderhousee-commercematiasr.firebaseapp.com",
projectId: "coderhousee-commercematiasr",
storageBucket: "coderhousee-commercematiasr.appspot.com",
messagingSenderId: "746557105197",
appId: "1:746557105197:web:b93c7ca64ff7cb197a44a4"
};

const app = firebase.initializeApp(firebaseConfig);

//Tener la referencia de la base de datos para importarla en el resto de la app
export const firestore = firebase.firestore(app)
export const Timestamp = firebase.firestore.Timestamp;