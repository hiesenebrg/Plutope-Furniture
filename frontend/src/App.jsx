import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";

import Success from "./pages/Success";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <div>
    <Routes>
      
      <Route exact path="/" element={<Home />} />

      <Route exact path="/products/:category" element={<ProductList />} />

      <Route exact path="/product/:id" element={<Product />} />

      <Route exact path="/cart" element={<Cart />} />

      <Route exact path="/success" element={<Success />} />
      {user ? (
        <Route path="/login" element={<Home />} />
      ) : (
        <Route path="/login" element={<Login />} />
      )}

      {user ? (
        <Route path="/register" element={<Home />} />
      ) : (
        <Route path="/register" element={<Register />} />
      )}
    </Routes>
    </div>
  );
};

export default App;
