import { ItemListContainer, ItemDetailContainer, NavBar, Checkout,Footer } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />}></Route>
          <Route path="/categoria/:category" element={<ItemListContainer />}></Route>
          <Route path="/producto/:idProduct" element={<ItemDetailContainer />}></Route>
          <Route path="/cart" element={<Checkout />}></Route>
        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
