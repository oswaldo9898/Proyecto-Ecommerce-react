import { ItemListContainer, ItemDetailContainer, NavBar } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />}></Route>
        <Route path="/categoria/:category" element={<ItemListContainer />}></Route>
        <Route path="/producto/:idProduct" element={<ItemDetailContainer />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
