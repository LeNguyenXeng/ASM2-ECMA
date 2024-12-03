import Banner from "../components/Banner";
import Shipping from "../components/Shipping";

function CheckOut(){
    return (
       <div>
         <Banner title="Checkout" currentPage="Checkout" />
        <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
  <form action="#" className="mx-auto max-w-screen-xl px-4 2xl:px-0 " style={{fontFamily: 'Poppins', width: '71%'}}>
    <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
      <div className="min-w-0 flex-1 space-y-8">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white" style={{fontSize: 26}}>Billing details</h2>
          <div className="grid grid-cols-1 gap-4">
            <div className="flexone flex">
              <div className="mt-3">
                <label htmlFor="your_name" className="mb-2 block text-sm font-semibold text-gray-900 dark:text-white" style={{fontSize: 13}}> First Name
                </label>
                <input type="text" id="your_name" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" required style={{width: 211, height: 50, borderRadius: 10, border: '1px solid #9F9F9F', background: '#FFF'}} />
              </div>
              <div style={{marginLeft: 30}} className="mt-3">
                <label htmlFor="your_email" className="mb-2 block text-sm font-semibold text-gray-900 dark:text-white" style={{fontSize: 13}}> Last Name
                </label>
                <input type="text" id="your_name" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" required style={{width: 211, height: 50, borderRadius: 10, border: '1px solid #9F9F9F', background: '#FFF'}} />
              </div>
            </div>
            <div>
              <div className="mb-2 items-center gap-2 mt-3">
                <label htmlFor="select-country-input-3" className="block text-sm font-semibold text-gray-900 dark:text-white" style={{fontSize: 13}}> Company Name (Optional)
                </label>
              </div>
              <input type="text" id="your_name" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" required style={{width: 453, height: 50, borderRadius: 10, border: '1px solid #9F9F9F', background: '#FFF'}} />
            </div>
            <div>
              <div className="mb-2 items-center gap-2 mt-3">
                <label htmlFor="select-city-input-3" className="block text-sm font-semibold text-gray-900 dark:text-white" style={{fontSize: 13}}> Country / Region </label>
              </div>
              <select id="select-city-input-3" style={{width: 453, height: 50, borderRadius: 10, border: '1px solid #9F9F9F', background: '#FFF', fontSize: 13}} className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500">
                <option selected>Sri Lanka</option>
                <option value="NY">Viet Nam</option>
                <option value="LA">Ha Noi</option>
                <option value="CH">Thanh Hoa</option>
                <option value="HU">Hai Phong</option>
              </select>
            </div>
            <div>
              <div className="mb-2 items-center gap-2 mt-3">
                <label htmlFor="select-country-input-3" className="block text-sm font-semibold text-gray-900 dark:text-white" style={{fontSize: 13}}> Street address
                </label>
              </div>
              <input type="text" id="your_name" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" required style={{width: 453, height: 50, borderRadius: 10, border: '1px solid #9F9F9F', background: '#FFF'}} />
            </div>
            <div>
              <div className="mb-2 items-center gap-2 mt-3">
                <label htmlFor="select-country-input-3" className="block text-sm font-semibold text-gray-900 dark:text-white" style={{fontSize: 13}}> Town / City
                </label>
              </div>
              <input type="text" id="your_name" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" required style={{width: 453, height: 50, borderRadius: 10, border: '1px solid #9F9F9F', background: '#FFF'}} />
            </div>
            <div>
              <div className="mb-2 items-center gap-2 mt-3">
                <label htmlFor="select-city-input-3" className="block text-sm font-semibold text-gray-900 dark:text-white" style={{fontSize: 13}}> Province </label>
              </div>
              <select id="select-city-input-3" style={{width: 453, height: 50, borderRadius: 10, border: '1px solid #9F9F9F', background: '#FFF', fontSize: 13}} className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500">
                <option selected>Western Province</option>
                <option value="NY">Thanh Hoa</option>
                <option value="LA">Ha Noi</option>
                <option value="CH">Ninh Binh</option>
                <option value="HU">Hai Phong</option>
              </select>
            </div>
            <div>
              <div className="mb-2 items-center gap-2 mt-3">
                <label htmlFor="select-country-input-3" className="block text-sm font-semibold text-gray-900 dark:text-white" style={{fontSize: 13}}> ZIP code
                </label>
              </div>
              <input type="text" id="your_name" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" required style={{width: 453, height: 50, borderRadius: 10, border: '1px solid #9F9F9F', background: '#FFF'}} />
            </div>
            <div>
              <div className="mb-2 items-center gap-2 mt-3">
                <label htmlFor="select-country-input-3" className="block text-sm font-semibold text-gray-900 dark:text-white" style={{fontSize: 13}}> Phone
                </label>
              </div>
              <input type="text" id="your_name" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" required style={{width: 453, height: 50, borderRadius: 10, border: '1px solid #9F9F9F', background: '#FFF'}} />
            </div>
            <div>
              <div className="mb-2 items-center gap-2 mt-3">
                <label htmlFor="select-country-input-3" className="block text-sm font-semibold text-gray-900 dark:text-white" style={{fontSize: 13}}> Email address
                </label>
              </div>
              <input type="text" id="your_name" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" required style={{width: 453, height: 50, borderRadius: 10, border: '1px solid #9F9F9F', background: '#FFF'}} />
            </div>
            <div>
              <div className="mb-2 items-center gap-2 mt-3" style={{marginTop: 22}}>
                <label htmlFor="select-country-input-3" className="block text-sm font-semibold text-gray-900 dark:text-white" style={{fontSize: 13}}>
                </label>
              </div>
              <input type="text" id="your_name" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Additional information" required style={{width: 453, height: 53, borderRadius: 10, border: '1px solid #9F9F9F', background: '#FFF', fontSize: 13}} />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md" style={{marginTop: 45}}>
        <div className="flow-root">
          <div className="-my-3 divide-gray-200 dark:divide-gray-800">
            <dl className="flex items-center justify-between gap-4 py-3">
              <dt className="text-base font-bold text-gray-900 dark:text-gray-400" style={{fontSize: 17}}>Product</dt>
              <dd className="text-base font-bold text-gray-900 dark:text-white" style={{fontSize: 17}}>Subtotal</dd>
            </dl>
            <dl className="flex items-center justify-between gap-4 py-3" style={{marginTop: '-10px'}}>
              <dt className="text-base font-medium text-gray-500 dark:text-gray-400" style={{color: '#9F9F9F', fontSize: 14}}>Asgaard sofa</dt>
              <div className="span-x1" style={{marginRight: 220}}>
                <span style={{fontSize: 12}}>X</span>
                <span style={{fontSize: 12}}>1</span>
              </div>
              <dd className="text-base font-medium text-green-500" style={{color: '#000', fontSize: 14}}>25.000.000đ</dd>
            </dl>
            <dl className="flex items-center justify-between gap-4 py-3" style={{marginTop: '-10px'}}>
              <dt className="text-base font-medium text-gray-500 dark:text-gray-400" style={{color: '#000', fontSize: 14}}>Subtotal</dt>
              <dd className="text-base font-medium text-gray-900 dark:text-white" style={{color: '#000', fontSize: 14}}>25.000.000đ</dd>
            </dl>
            <dl className="flex items-center justify-between gap-4 py-3" style={{marginTop: '-10px'}}>
              <dt className="text-base font-medium text-gray-500 dark:text-gray-400" style={{color: '#000', fontSize: 14}}>Total</dt>
              <dd className="text-base font-bold text-gray-900 dark:text-white" style={{color: 'var(--Primary, #B88E2F)', fontSize: 18}}>250.00.000đ</dd>
            </dl>
          </div>
          <hr style={{marginTop: 20, background: '#D9D9D9'}} />
        </div>
        <div className="space-y-3">
          <div className="dircet flex">
            <svg height={100} width={100} xmlns="http://www.w3.org/2000/svg">
              <circle r={7} cx={7} cy={7} fill="black" />
            </svg>
            <p style={{fontSize: 13, marginLeft: '-75px', marginTop: '-2px'}}>Direct Bank Transfer</p>
          </div>
          <button type="submit" className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Proceed
            to Payment</button>
          <p style={{color: '#9F9F9F', fontSize: 13, marginTop: '-118px'}} className="text-sm font-normal text-gray-500 dark:text-gray-400">Make your payment directly into our bank account. Please use <br /> your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
          <div className="dircet flex" style={{marginTop: 20}}>
            <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 14 14" fill="none">
              <circle cx={7} cy={7} r="6.5" stroke="#9F9F9F" />
            </svg>
            <p style={{fontSize: 13, marginLeft: 12, marginTop: '-2px', color: '#9F9F9F'}}>Direct Bank Transfer</p>
          </div>
          <div className="dircet flex">
            <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 14 14" fill="none">
              <circle cx={7} cy={7} r="6.5" stroke="#9F9F9F" />
            </svg>
            <p style={{fontSize: 13, marginLeft: 12, marginTop: '-2px', color: '#9F9F9F'}}>Cash On Delivery</p>
          </div>
          <button type="submit" className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Proceed
            to Payment</button>
          <p style={{marginTop: '-30px', color: '#000', fontSize: 13}} className="text-sm font-normal text-gray-500 dark:text-gray-400">
            Your personal data will be used to support your experience throughout this website, to manage access to your account, and <br /> for other purposes described in our privacy policy.
          </p>
          <button style={{marginTop: 26, marginLeft: 84, width: 248, height: 50, fontSize: 15}} type="button" className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Place order</button>
        </div>
      </div>
    </div>
  </form>
        </section>
        <Shipping/>
       </div>
    );
}
export default CheckOut;