import { Account, ItemListContainer, ItemDetailContainer, NavBar, Checkout,Footer, Login, Register } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider, AuthProvider } from "./context";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />}></Route>
          <Route path="/categoria/:category" element={<ItemListContainer />}></Route>
          <Route path="/producto/:idProduct" element={<ItemDetailContainer />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/account" element={<Account />}></Route>
          <Route path="/account/login" element={<Login />}></Route>
          <Route path="/account/register" element={<Register />}></Route>
        </Routes>
        <Footer />
      </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
