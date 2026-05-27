import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Admin() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [products, setProducts] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const navigate = useNavigate();

 useEffect(() => {
  const token = localStorage.getItem("token");

  if (!token) {
    navigate("/login");
  } else {
    fetchProducts();
  }
}, []);

  const fetchProducts = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/products");

      const data = await res.json();

      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/products/${id}`, {
        method: "DELETE",
      });

      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  };

  const editProduct = (product) => {
    setEditingId(product._id);

    setName(product.name);
    setPrice(product.price);
    setImage(product.image);
    setDescription(product.description);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
      image,
      description,
    };

    try {
      const url = editingId
        ? `http://localhost:5000/api/products/${editingId}`
        : "http://localhost:5000/api/products";

      const method = editingId ? "PUT" : "POST";

      await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });

      alert(
        editingId
          ? "Producto actualizado 🚀"
          : "Producto creado 🚀"
      );

      fetchProducts();

      setName("");
      setPrice("");
      setImage("");
      setDescription("");
      setEditingId(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-black mb-12">
          Panel Admin
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <input
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-zinc-900 border border-zinc-800 p-4 rounded-2xl"
          />

          <input
            type="number"
            placeholder="Precio"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full bg-zinc-900 border border-zinc-800 p-4 rounded-2xl"
          />

          <input
            type="text"
            placeholder="URL imagen"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full bg-zinc-900 border border-zinc-800 p-4 rounded-2xl"
          />

          <textarea
            placeholder="Descripción"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full bg-zinc-900 border border-zinc-800 p-4 rounded-2xl h-40"
          />

          <button className="bg-white text-black px-8 py-4 rounded-2xl font-bold">
            {editingId ? "Actualizar producto" : "Crear producto"}
          </button>
        </form>

        <div className="mt-16 space-y-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 flex items-center gap-6"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-28 h-28 object-cover rounded-2xl"
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
                onClick={() => editProduct(product)}
                className="bg-blue-500 px-5 py-3 rounded-2xl font-bold mr-3"
              >
                Editar
              </button>

              <button
                onClick={() => deleteProduct(product._id)}
                className="bg-red-500 px-5 py-3 rounded-2xl font-bold"
              >
                Eliminar
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}