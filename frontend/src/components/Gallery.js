import gallery from "../assets/images/gallery.png";

const Gallery = () => {
  return (
    <div className="mt-10 relative">
      <img
        className="h-[400px] w-full rounded-xl"
        src={gallery}
        alt="artists"
      />
      <div className="h-[400px] absolute bg-[#FFCC45] inset-x-0 top-0 w-full bg-opacity-20 rounded-xl">
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="opacity-100 mt-40 text-5xl font-bold text-white">
            Taste our <span className="text-[#FFCC45]">#1</span> Best Tasting{" "}
            <br />
            <span className="text-[#FFCC45]">Buko Pie</span>
          </h1>
          <a
            href="/menu"
            className="mt-4 cursor-pointer bg-[#FFCC45] font-semibold text-sm py-2 px-4 rounded-full hover:scale-90 transition duration-300 ease-in-out"
          >
            Order Now
          </a>
        </div>
      </div>
    </div>
  );
};
export default Gallery;
