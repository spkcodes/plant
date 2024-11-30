import React, { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ProductGrid from "../components/ProductGrid";
import About from "../components/About";
import Footer from "../components/Footer";
import MostPopularPlants from "../components/MostPopularPlants";
import InstagramPlants from "../components/InstagramPlants";
import WhereToBuyPlants from "../components/WhereToBuy";
import CartModal from "../components/Cartmodal";

const Home = () => {
  const [isCartModalOpen, setCartModalOpen] = useState(false); 

  return (
    <div className="App">
      <Header onCartClick={() => setCartModalOpen(true)} />
      {isCartModalOpen && <CartModal onClose={() => setCartModalOpen(false)} />}
      
      <Hero />
      <ProductGrid />
      <MostPopularPlants />
      <WhereToBuyPlants />
      <InstagramPlants />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
