import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Products from "../components/Products";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Products />
    </div>
  )
}