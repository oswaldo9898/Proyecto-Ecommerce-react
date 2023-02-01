import { NavBar, ItemListContainer, ItemDetailConatiner } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />}></Route>
        <Route path="/categoria/:category" element={<ItemListContainer />}></Route>
        <Route path="/producto/:idProduct" element={<ItemDetailConatiner />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
