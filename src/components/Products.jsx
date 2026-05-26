import { Link } from "react-router-dom";
export default function Products() {
  const products = [
    {
      id: 1,
      name: "Nike Air Max",
      price: "$189.999",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "iPhone 16 Pro",
      price: "$2.499.999",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 pb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
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
                {product.price}
              </p>
            <Link to={`/product/${product.id}`}>
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