import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Brands from "./components/Brands";
import Products from "./components/Products";
import Categories from "./components/Categories";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Brands />
      <Products title="New Arrivals" />
      <Products title="Top Selling" />
      <Categories />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  );
}
