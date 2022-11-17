import Navbar from "../components/Navbar";
import products from "../data/Products";
import pie1 from "../data/images/pie1.png";
import pie2 from "../data/images/pie2.png";
import pie3 from "../data/images/pie3.png";
import pie4 from "../data/images/pie4.png";

import { MdShoppingCart } from "react-icons/md";
import MenuNav from "../components/MenuNav";

const Menu = () => {
  return (
    <div className="w-10/12 mx-auto">
      <Navbar />
      <MenuNav />
      <div className="text-center mt-5">
        <div className="text-center font-bold text-2xl my-5">
          <h1>Pie</h1>
        </div>
        <div className="flex gap-8 justify-center">
          <div class="w-52 max-w-sm bg-white rounded-[15px] shadow-lg bg-gray-100 my-4">
            <a href="www.google">
              <img
                className="h-40 w-44 mx-auto py-4 hover:scale-110 transition duration-300 ease-in-out"
                src={pie1}
                alt="product"
              />
            </a>
            <div class="px-5 pb-5 bg-white h-20 pt-4 rounded-b-[15px]">
              <a href="www.google">
                <h5 class="font-semibold tracking-tight text-gray-900">Pie</h5>
              </a>
              <div class="flex justify-between items-center">
                <span class="font-bold text-gray-900">₱250</span>
                <MdShoppingCart className="text-2xl text-[#FFCC45] cursor-pointer hover:scale-75 transition duration-300 ease-in-out" />
              </div>
            </div>
          </div>
          <div class="w-52 max-w-sm bg-white rounded-[15px] shadow-lg bg-gray-100 my-4">
            <a href="www.google">
              <img
                className="h-40 hover:scale-110 transition duration-300 ease-in-out"
                src={pie2}
                alt="product"
              />
            </a>
            <div class="px-5 pb-5 bg-white h-20 pt-4 rounded-b-[15px]">
              <a href="www.google">
                <h5 class="font-semibold tracking-tight text-gray-900">Pie</h5>
              </a>
              <div class="flex justify-between items-center">
                <span class="font-bold text-gray-900">₱250</span>
                <MdShoppingCart className="text-2xl text-[#FFCC45] cursor-pointer hover:scale-75 transition duration-300 ease-in-out" />
              </div>
            </div>
          </div>
          <div class="w-52 max-w-sm bg-white rounded-[15px] shadow-lg bg-gray-100 my-4">
            <a href="www.google">
              <img
                className="h-40 hover:scale-110 transition duration-300 ease-in-out"
                src={pie3}
                alt="product"
              />
            </a>
            <div class="px-5 pb-5 bg-white h-20 pt-4 rounded-b-[15px]">
              <a href="www.google">
                <h5 class="font-semibold tracking-tight text-gray-900">Pie</h5>
              </a>
              <div class="flex justify-between items-center">
                <span class="font-bold text-gray-900">₱250</span>
                <MdShoppingCart className="text-2xl text-[#FFCC45] cursor-pointer hover:scale-75 transition duration-300 ease-in-out" />
              </div>
            </div>
          </div>
          <div class="w-52 max-w-sm bg-white rounded-[15px] shadow-lg bg-gray-100 my-4">
            <a href="www.google">
              <img
                className="h-40 hover:scale-110 transition duration-300 ease-in-out"
                src={pie4}
                alt="product"
              />
            </a>
            <div class="px-5 pb-5 bg-white h-20 pt-4 rounded-b-[15px]">
              <a href="www.google">
                <h5 class="font-semibold tracking-tight text-gray-900">Pie</h5>
              </a>
              <div class="flex justify-between items-center">
                <span class="font-bold text-gray-900">₱250</span>
                <MdShoppingCart className="text-2xl text-[#FFCC45] cursor-pointer hover:scale-75 transition duration-300 ease-in-out" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
