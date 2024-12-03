/* eslint-disable react/prop-types */
export default function Product({ item }) {
  console.log(item);

  return (
    <div className="rounded overflow-hidden flex flex-col group relative">
      <div className="relative">
        <a href="/productpage">
          <img
            className="w-full"
            src={item.img}
            alt="Sunset in the mountains"
          />
          <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-50" />
        </a>
        <a href="">
          <div
            style={{
              borderRadius: 68,
              backgroundColor: item.discount == "New" ? "#2EC1AC" : "#ff3e3e",
            }}
            className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out"
          >
            {item.discount}
          </div>
        </a>
        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-60 group-hover:bottom-4 bg-white w-9/12 p-3 mx-auto transition-all duration-300">
          <div className="text-center">
            <h3
              style={{ color: "var(--Primary, #B88E2F)" }}
              className="text-base font-bold"
            >
              Add to cart
            </h3>
          </div>
        </div>
      </div>
      <div
        className="px-4 py-7 mb-1"
        style={{ background: "var(--Color-Light-BG, #F4F5F7)" }}
      >
        <a
          href="/productpage"
          className="font-bold text-2xl inline-block hover:text-indigo-600 transition duration-500 ease-in-out mb-2"
        >
          {item.name}
        </a>
        <p className="text-gray-500 text-sm">{item.des}</p>
        <del className="text-gray-400 text-sm mt-2">{item.price}</del>
      </div>
    </div>
  );
}
