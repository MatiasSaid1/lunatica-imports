export default function App() {
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
    <div className="min-h-screen bg-black text-white">
      {/* NAVBAR */}
      <header className="border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between">
          <h1 className="text-3xl font-black tracking-widest">
            LUNATICA IMPORTS
          </h1>

          <button className="bg-white text-black px-5 py-2 rounded-xl font-bold">
            Carrito
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="py-24 text-center px-6">
        <h2 className="text-6xl md:text-8xl font-black uppercase">
          Importados Premium
        </h2>

        <p className="text-zinc-400 mt-6 text-xl">
          Ropa y tecnología importada.
        </p>
      </section>

      {/* PRODUCTOS */}
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
                <h3 className="text-2xl font-bold">
                  {product.name}
                </h3>

                <p className="text-zinc-400 mt-3 text-xl">
                  {product.price}
                </p>

                <button className="mt-6 w-full bg-white text-black py-4 rounded-2xl font-bold">
                  Comprar
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}