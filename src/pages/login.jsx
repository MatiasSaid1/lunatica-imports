import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "https://lunatica-backend.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await res.json();

      if (data.token) {
        localStorage.setItem("token", data.token);

        alert("Login exitoso 🚀");

        navigate("/admin");
      } else {
        alert("Credenciales incorrectas");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <form
        onSubmit={handleLogin}
        className="bg-zinc-900 border border-zinc-800 p-10 rounded-3xl w-full max-w-md space-y-6"
      >
        <h1 className="text-4xl font-black text-center">
          Login Admin
        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-black border border-zinc-700 p-4 rounded-2xl"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full bg-black border border-zinc-700 p-4 rounded-2xl"
        />

        <button className="w-full bg-white text-black py-4 rounded-2xl font-bold">
          Iniciar sesión
        </button>
      </form>
    </div>
  )
}