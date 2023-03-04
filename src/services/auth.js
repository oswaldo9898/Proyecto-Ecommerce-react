import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from "firebase/auth";




const isLogin = async() => {
    const auth = getAuth();
    let resp = await onAuthStateChanged(auth, (usuarioActivo) => {
        console.log(usuarioActivo)
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
        console.log(error)
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

export const UsersService = { isLogin, registerUser, loginUser,signOutUser }