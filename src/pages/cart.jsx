import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  const total = cart.reduce((acc, product) => {
    return acc + product.price;
  }, 0);

  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-black mb-12">
          Carrito
        </h1>

        <div className="space-y-6">
          {cart.map((product, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 flex items-center gap-6"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-32 h-32 object-cover rounded-2xl"
              />

              <div className="flex-1">
                <h2 className="text-2xl font-bold">
                  {product.name}
                </h2>

                <p className="text-zinc-400 mt-2">
                  ${product.price}
                </p>
              </div>

              <button
                onClick={() => removeFromCart(index)}
                className="bg-red-500 px-4 py-2 rounded-xl font-bold"
              >
                Eliminar
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
          <h2 className="text-3xl font-black">
            Total: ${total}
          </h2>

          <button className="mt-6 bg-white text-black px-8 py-4 rounded-2xl font-bold">
            Finalizar compra
          </button>
        </div>
      </div>
    </div>
  )
}