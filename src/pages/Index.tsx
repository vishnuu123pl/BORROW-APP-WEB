import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import CategoriesSection from "../components/CategoriesSection";
import LatestListings from "../components/LatestListings";
import Footer from "../components/Footer";

export default function Index() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CategoriesSection />
      <LatestListings />
      <Footer />
    </>
  );
}