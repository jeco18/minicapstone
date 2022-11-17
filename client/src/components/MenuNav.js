import { GiPieSlice, GiCakeSlice, GiSlicedBread } from "react-icons/gi";

function MenuNav() {
  return (
    <div>
      <div className="flex justify-center gap-10">
        <div className="bg-gray-100 p-5 rounded-xl hover:bg-[#FFCC45] cursor-pointer shadow-lg">
          <GiPieSlice className="text-3xl" />
        </div>
        <div className="bg-gray-100 p-5 rounded-xl hover:bg-[#FFCC45] cursor-pointer shadow-lg">
          <GiCakeSlice className="text-3xl" />
        </div>
        <div className="bg-gray-100 p-5 rounded-xl hover:bg-[#FFCC45] cursor-pointer shadow-lg">
          <GiSlicedBread className="text-3xl" />
        </div>
      </div>
    </div>
  );
}

export default MenuNav;
