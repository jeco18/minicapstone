import ETO from "../data/images/EasyToOrder.svg";
import BQ from "../data/images/BestQuality.svg";
import FD from "../data/images/FastDelivery.svg";

const HowItWorks = () => {
  return (
    <div className="text-center leading-loose">
      <p className="text-[#FFCC45] font-semibold">How It Works</p>
      <h1 className="font-bold text-xl">What We Serve</h1>
      <p className="font-semibold text-gray-600 mt-4">
        Product quality is our priority, and always guarantees food safety until
        it's in your hands.
      </p>
      <div className="flex justify-around mt-12">
        <div>
          <img className="w-40 mx-auto" src={ETO} alt="Order" />
          <h1 className="font-bold text-xl my-3">Easy To Order</h1>
          <p className="font-medium text-gray-600">
            You only order through <br /> the app
          </p>
        </div>
        <div>
          <img className="w-52 mx-auto mt-14" src={FD} alt="Delivery" />
          <h1 className="font-bold text-xl my-3">Fast Delivery</h1>
          <p className="font-medium text-gray-600">
            Delivery will be on <br /> time
          </p>
        </div>
        <div>
          <img className="w-48 mx-auto mt-5" src={BQ} alt="Reviews" />
          <h1 className="font-bold text-xl my-3">Best Quality</h1>
          <p className="font-medium text-gray-600">
            The best quality of food <br /> for you
          </p>
        </div>
      </div>
    </div>
  );
};
export default HowItWorks;
