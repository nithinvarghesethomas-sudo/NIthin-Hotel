import Hero from "../components/Hero/Hero";
import Categories from "../components/Categories/Categories";
import PopularFoods from "../components/PopularFoods/PopularFoods";
import TodaysSpecial from "../components/TodaysSpecial/TodaysSpecial";
import Offers from "../components/Offers/Offers";
import Gallery from "../components/Gallery/Gallery";
import Testimonials from "../components/Testimonials/Testimonials";

function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <PopularFoods />
      <TodaysSpecial />
      <Offers />
      <Gallery />
      <Testimonials />
    </>
  );
}

export default Home;