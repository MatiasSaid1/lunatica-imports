import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.log(error));
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Cargando...
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full rounded-3xl"
        />

        <div>
          <h1 className="text-5xl font-black">
            {product.name}
          </h1>

          <p className="text-3xl text-zinc-300 mt-6">
            ${product.price}
          </p>

          <p className="text-zinc-400 mt-8 text-lg">
            {product.description}
          </p>

          <button
            onClick={() => addToCart(product)}
            className="mt-10 bg-white text-black px-10 py-4 rounded-2xl font-bold"
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  )
}