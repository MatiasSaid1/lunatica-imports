import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <header className="border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <Link to="/">
          <h1 className="text-3xl font-black tracking-widest text-white">
            LUNATICA IMPORTS
          </h1>
        </Link>

        <Link to="/cart">
          <button className="bg-white text-black px-5 py-2 rounded-xl font-bold">
            🛒 {cart.length}
          </button>
        </Link>
      </div>
    </header>
  )
}