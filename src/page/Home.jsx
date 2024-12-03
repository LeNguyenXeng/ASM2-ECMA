/* eslint-disable react/jsx-key */
import Banner from "../components/Banner";
import Product from "../components/Product";
import img1 from "../assets/image_1.png";
import img2 from "../assets/image2.png";
import img3 from "../assets/image3.png";
import img4 from "../assets/image4.png";
import i1 from "../assets/i1.jpg";
import i2 from "../assets/2.jpeg.jpg";
import i3 from "../assets/3.jpg";
import i4 from "../assets/1.png";
import Blog from "../components/Blog";
import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";
import Shipping from "../components/Shipping";

function Home() {
  const products = [
    {
      discount: "-30%",
      img: img1,
      name: " Syltherine",
      des: "Stylish cafe chair",
      price: "3.500.000đ",
    },
    {
      discount: "-30%",
      img: img2,
      name: " Leviosa",
      des: "Stylish cafe chair",
      price: "14.000.000đ",
    },
    {
      discount: "-50%",
      img: img3,
      name: " Lolito",
      des: "Luxury big sofa",
      price: "14.000.000đ",
    },
    {
      discount: "New",
      img: img4,
      name: " Respira",
      des: "Outdoor bar table and stool",
      price: "5.000.000đ",
    },
  ];
  const blogs = [
    {
      img: blog1,
      title: "THE ULTIMATE SOFA BUYING GUIDE",
    },
    {
      img: blog2,
      title: "A BEDROOM MUST HAVE SOME THING LIKE THIS",
      des: "Your level of comfort when geting into and out of bed can be greatly influenced by the bed frame you choose. It may significantly affect how want your bedroom to feet and look",
    },
    {
      img: blog3,
      title: "WHY IS A TV CONSOLE A MUST IN EVERY HOUSE",
      des: "Your level of comfort when geting into and out of bed can be greatly influenced by the bed frame you choose. It may significantly affect how want your bedroom to feet and look",
    },
  ];
  return (
    <div>
      <Banner title="Trang Chủ" />
      <div className="new">
        <div>
          <p className="ml-20 mt-10 text-3xl font-semibold text-gray-900 dark:text-white">
            New
          </p>
          <hr
            style={{ width: "90%", height: 1, marginTop: 18 }}
            className="mx-auto my-4 bg-black border-0 rounded md:my-10 dark:bg-gray-700"
          />
          <div className="max-w-screen-xl mx-auto" style={{ maxWidth: 1365 }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
              {products.map((item) => {
                return <Product item={item} />;
              })}
            </div>
          </div>
        </div>

        <div className="shop ">
          <p className="ml-20 mt-10 text-3xl font-semibold text-gray-900 dark:text-white cursor-pointer">
            Shop
          </p>
          <hr
            style={{ width: "90%", height: 1, marginTop: 18 }}
            className="mx-auto my-4 bg-black border-0 rounded md:my-10 dark:bg-gray-700"
          />
          <div
            className="max-w-screen-xl mx-auto cursor-pointer"
            style={{ maxWidth: 1365 }}
          >
            <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll lg:overflow-visible">
              <div className="grid grid-cols-2 gap-2 w-full">
                <div className="w-full">
                  <img
                    className="object-cover object-center w-full h-60 md:h-80"
                    src={i1}
                    alt
                  />
                </div>
                <div className="w-full">
                  <img
                    className="object-cover object-center w-full h-60 md:h-80"
                    src={i2}
                    alt
                  />
                </div>
                <div className="w-full">
                  <img
                    className="object-cover object-center w-full h-60 md:h-80"
                    src={i3}
                    alt
                  />
                </div>
                <div className="w-full">
                  <img
                    className="object-cover object-center w-full h-60 md:h-80"
                    src={i4}
                    alt
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="blog">
          <p className="ml-20 mt-10 text-3xl font-semibold text-gray-900 dark:text-white cursor-pointer">
            Blog
          </p>
          <hr
            style={{ width: "90%", height: 1, marginTop: 18 }}
            className="mx-auto my-4 bg-black border-0 rounded md:my-10 dark:bg-gray-700"
          />
          {blogs.map((item, index) => (
            <Blog blog={item} index={index} />
          ))}
        </div>
      </div>
      < Shipping />
    </div>
  );
}
export default Home;
