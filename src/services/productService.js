import {
    getFirestore,
    doc,
    getDoc,
    collection,
    getDocs,
    addDoc,
    setDoc,
    
} from "firebase/firestore";


const getAllProducts = async(category) => {
    const db = getFirestore();
    const productsCollection = collection(db, 'products');
    const snapshot = await getDocs(productsCollection);
    const data =  snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}));
    let products = data;
    if (category) {
        products = data.filter(p => p.category === category)
    }
    return products;
}

const getAllProductsSearch = async(search) => {
    const db = getFirestore();
    const productsCollection = collection(db, 'products');
    const snapshot = await getDocs(productsCollection);
    const products =  snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}));
    let newProducts = products.filter((product) => product.title.includes(search.get('title')));
    return newProducts;
}

const getProduct = async ( id ) => {
    const db = getFirestore();
    const productDoc = doc(db, 'products', id);
    const snapshot = await getDoc(productDoc);
    const product =  { id: snapshot.id, ...snapshot.data()};
    return product;
};

const getAllOrders = async() => {
    const db = getFirestore();
    const ordersCollection = collection(db, 'orders');
    const snapshot = await getDocs(ordersCollection);
    const orders =  snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}));
    return orders;
}


const insertOrder =  async(orden) => {
    const db = getFirestore();
    const orderCollection = doc(collection(db, 'orders'));
    const result = await setDoc(orderCollection, orden);
    return result;
}

export const productsService = {getAllProducts, getProduct, getAllProductsSearch, getAllOrders, insertOrder }