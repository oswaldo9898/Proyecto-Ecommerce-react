import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from "firebase/auth";

import {
    getFirestore,
    doc,
    collection,
    setDoc,
    
} from "firebase/firestore";




const isLogin = async() => {
    const auth = getAuth();
    let resp = await onAuthStateChanged(auth, (usuarioActivo) => {
        return usuarioActivo
        
    });
    return resp
}

const registerUser = async(email, password) => {
    try {
        const auth = getAuth();
        const resp = await createUserWithEmailAndPassword(auth, email, password);
        return resp;
    } catch (error) {
        return null
    }
}

const loginUser = async(email, password) => {
    try {
        const auth = getAuth();
        const resp = await signInWithEmailAndPassword(auth, email, password);
        return resp;
    } catch (error) {
        return null
    }
}

const signOutUser = async() => {
    const auth = getAuth();
    let resp = null
    await signOut(auth, (res) => {
        resp = res;
    });
    return resp
}

const insertUser =  async(datos) => {
    const db = getFirestore();
    const orderCollection = doc(collection(db, 'users'));
    const result = await setDoc(orderCollection, datos);
    return result;
}

export const UsersService = { isLogin, registerUser, loginUser,signOutUser, insertUser }