export default function Navbar() {
  return (
    <header className="border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <h1 className="text-3xl font-black tracking-widest text-white">
          LUNATICA IMPORTS
        </h1>

        <button className="bg-white text-black px-5 py-2 rounded-xl font-bold">
          Carrito
        </button>
      </div>
    </header>
  )
}