import Navbar from "../components/Navbar";
import piebg from "../data/images/piebg.png";
import HowItWorks from "../components/How";
import Product from "../components/Product";
import Feedback from "../components/Feedback";
import Gallery from "../components/Gallery";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="w-10/12 mx-auto">
      <Navbar />
      <section className="grid grid-cols-2 h-[85vh]">
        <div>
          <h1 className="text-5xl font-[600] leading-snug mt-32">
            Taste The <span className="text-[#FFCC45]">#1</span> Best Pasalubong
            Buko Pie In Bicol
          </h1>
          <p className="my-4">
            Yema buko pie is best served when its chilled.. its different from
            any other buko pie where it has to be served hot or fresh baked.
          </p>
          <Link to={"/menu"}>
            <button className="bg-[#FFCC45] font-semibold text-sm py-2 px-4 rounded-full hover:scale-90 transition duration-300 ease-in-out">
              Order Now
            </button>
          </Link>
        </div>
        <img className="w-full mt-5" src={piebg} alt="pie" />
      </section>
      <HowItWorks />
      <Product />
      <Feedback />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Home;
