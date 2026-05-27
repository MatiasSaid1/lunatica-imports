import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Admin from "./pages/Admin";
import Login from "./pages/Login";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
  path="/cart"
  element={<Cart />}
/>
<Route
  path="/admin"
  element={<Admin />}
/>

<Route
  path="/login"
  element={<Login />}
/>

      <Route
        path="/product/:id"
        element={<ProductDetail />}
      />
    </Routes>
  )
}