import Banner from "../components/Banner";
import anhto1 from "../assets/anhto1.png";
import Shipping from "../components/Shipping";


function PageCart(){
    return (
        <div>
            <Banner title="Cart" currentPage="Cart" />
                <div className="product">
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row gap-4 mt-16 mb-24">
      <div className="md:w-3/4">
        <div className="p-6 mb-4 ml-16">
          <table className="w-full">
            <thead className="font-semibold bg-[#F9F1E7] h-12 text-sm text-black font-poppins">
              <tr className="relative">
                <td className="absolute left-[98px] top-[13px]">Product</td>
                <td>Price</td>
                <td>Quantity</td>
                <td>Subtotal</td>
                <td />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-4">
                  <div className="flex items-center">
                    <div className="bg-[#F9F1E7] rounded-lg w-20 h-20">
                      <img className="h-13 w-20 mr-4 mt-3" src={anhto1} alt="Product image" />
                    </div>
                    <div className="ml-5 text-sm text-gray-400 font-poppins">
                      <span className="font-semibold">Asgaard sofa</span>
                    </div>
                  </div>
                </td>
                <td className="py-4 text-gray-400 font-poppins text-sm">25.000.000đ</td>
                <td className="py-4">
                  <div className="flex items-center">
                    <span className="text-center w-8 border rounded-md py-2 text-black font-poppins text-sm border-gray-400">1</span>
                  </div>
                </td>
                <td className="py-4 text-black font-poppins text-sm">25.000.000đ</td>
                <td>
                  <a href>
                    <svg className="w-6 h-6 text-[#B88E2F] hover:text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28">
                      <path d="M23.625 7H20.125V4.8125C20.125 3.84727 19.3402 3.0625 18.375 3.0625H9.625C8.65977 3.0625 7.875 3.84727 7.875 4.8125V7H4.375C3.89102 7 3.5 7.39102 3.5 7.875V8.75C3.5 8.87031 3.59844 8.96875 3.71875 8.96875H5.37031L6.0457 23.2695C6.08945 24.202 6.86055 24.9375 7.79297 24.9375H20.207C21.1422 24.9375 21.9105 24.2047 21.9543 23.2695L22.6297 8.96875H24.2812C24.4016 8.96875 24.5 8.87031 24.5 8.75V7.875C24.5 7.39102 24.109 7 23.625 7ZM18.1562 7H9.84375V5.03125H18.1562V7Z" fill="currentColor" />
                    </svg>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="md:w-1/4" style={{marginTop: 23}}>
        <div className="p-6 mr-16 bg-[#F9F1E7] h-80">
          <h2 className="font-semibold text-center mb-6 text-black font-poppins" style={{fontSize: 31}}>Cart Totals</h2>
          <div className="flex justify-between mb-3 mt-12">
            <span className="text-black font-poppins text-sm">Subtotal</span>
            <span className="text-gray-400 font-poppins text-sm">25.000.000đ</span>
          </div>
          <div className="flex justify-between mb-2 mt-6">
            <span className="text-black font-poppins text-sm">Total</span>
            <span className="text-[#B88E2F] font-poppins text-lg">25.000.000đ</span>
          </div>
          <button className="ml-6 mt-6 text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2" style={{width: 202, height: 45, fontFamily: 'Poppins', fontSize: 15}}>Checkout</button>
        </div>
      </div>
    </div>
  </div>
            </div>
            <Shipping/>

        </div>
    );
}
export default PageCart;