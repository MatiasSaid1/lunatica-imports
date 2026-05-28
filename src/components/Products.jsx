import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://lunatica-backend.onrender.com/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 pb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-80 w-full object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold text-white">
                {product.name}
              </h3>

              <p className="text-zinc-400 mt-3 text-xl">
                ${product.price}
              </p>

              <Link to={`/product/${product._id}`}>
                <button className="mt-6 w-full bg-white text-black py-4 rounded-2xl font-bold">
                  Ver producto
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}