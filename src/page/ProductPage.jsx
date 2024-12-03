import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import anhto1 from "../assets/anhto1.png";
import anhduoi1 from "../assets/anhduoi1.png";
import anhduoi2 from "../assets/anhduoi2.png";
import img1 from "../assets/image_1.png";
import img2 from "../assets/image2.png";
import img3 from "../assets/image3.png";
import img4 from "../assets/image4.png";

function ProductPage(){
    return (
        <>
         <div>
  <div className="list" style={{background: '#F9F1E7', width: '100%', height: 70, position: 'relative'}}>
    <div className="text-list" style={{display: 'flex', gap: 12, alignItems: 'center', paddingLeft: 100, bottom: 0, right: 0, left: 0, top: 0, position: 'absolute'}}>
      <p className="text-gray-500">Home</p>
      <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
        <path d="M6 15L11 10L6 5L7 3L14 10L7 17L6 15Z" fill="black" />
      </svg>
      <p className="text-gray-500">Shop</p>
      <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
        <path d="M6 15L11 10L6 5L7 3L14 10L7 17L6 15Z" fill="black" />
      </svg>
      <p className="hover:text-green-500" style={{cursor: 'pointer'}}>Asgaard sofa
      </p>
    </div>
  </div>
  <div className="productpage" style={{marginLeft: '-25px'}}>
    <section className="text-gray-700 body-font overflow-hidden bg-white">
      <div className="container mx-auto" style={{paddingTop: '2rem', paddingBottom: '3rem'}}>
        <div className="lg:w-4/5 mx-auto">
          <div className="product1 flex flex">
            <div className="productsmall">
              <img style={{backgroundColor: '#F9F1E7', borderRadius: 10, marginRight: 90, width: 70, height: 55}} className="border-gray-200" src={icon1} />
              <img style={{backgroundColor: '#F9F1E7', borderRadius: 10, marginTop: 15, marginRight: 90, width: 70, height: 55}} className="border-gray-200" src={icon2} />
              <img style={{backgroundColor: '#F9F1E7', borderRadius: 10, marginTop: 15, marginRight: 90, width: 70, height: 55}} className="border-gray-200" src={icon3} />
              <img style={{backgroundColor: '#F9F1E7', borderRadius: 10, marginTop: 15, marginRight: 90, width: 70, height: 55}} className="border-gray-200" src={icon4} />
            </div>
            <img alt="ecommerce" className="lg:w-1/2 w-full object-cover object-center border-gray-200" style={{borderRadius: 10, backgroundColor: '#F9F1E7'}} src={anhto1} />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-gray-900 text-4xl title-font font-medium mb-1">Asgaard sofa</h2>
              <h1 className="text-xl text-gray-500 title-font tracking-widest" style={{marginTop: 10, marginBottom: 17}}>25.000.000đ</h1>
              <div className="flex mb-4">
                <span className="flex items-center" style={{gap: 2}}>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
                    </path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
                    </path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
                    </path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
                    </path>
                  </svg>
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
                    </path>
                  </svg>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                  <p className="text-gray-400">5 Customer Review</p>
                </span>
              </div>
              <p className="leading-relaxed">Setting the bar as one of the loudest speakers in its class, the
                Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear
                midrange and extended highs for a sound. </p>
              <div className="flex mt-6 items-center mb-5">
                <div className="color">
                  <div className="mb-4">
                    <span className="font-medium text-gray-500">Size</span>
                    <div className="flex items-center mt-2">
                      <button style={{borderRadius: 5, background: 'var(--Primary, #B88E2F)', width: 30, height: 30, fontSize: 13, fontStyle: 'normal', fontWeight: 400}} className=" hover:text-green-500 text-white rounded-full  mr-2 hover:bg-red-400">L</button>
                      <button style={{borderRadius: 5, background: '#F9F1E7', width: 30, height: 30, fontSize: 13, fontStyle: 'normal', fontWeight: 400}} className=" hover:text-green-500 text-black rounded-full  mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XL</button>
                      <button style={{borderRadius: 5, background: '#F9F1E7', width: 30, height: 30, fontSize: 13, fontStyle: 'normal', fontWeight: 400}} className=" hover:text-green-500 text-black rounded-full  mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XS</button>
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="font-medium text-gray-500">Color</span>
                    <div className="alo flex items-center mt-2">
                      <button style={{background: '#816DFA'}} className="w-6 h-6 rounded-full mr-2" />
                      <button style={{background: '#000'}} className="w-6 h-6 rounded-full  mr-2" />
                      <button style={{background: 'var(--Primary, #B88E2F)'}} className="w-6 h-6 rounded-full mr-2" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="hover:bg-black hover:text-white inline-flex items-center" style={{borderRadius: 10, border: '1px solid #9F9F9F', height: 58, width: 120}}>
                  <button className=" disabled:opacity-50 inline-flex items-center  py-1" style={{paddingLeft: 12, paddingRight: '0.5rem'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  </button>
                  <div className="hover:text-white text-gray-600  inline-flex items-center px-4 py-1 select-none">
                    2
                  </div>
                  <button className=" disabled:opacity-50 inline-flex items-center px-2 py-1 border-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
                <div className=" hover:bg-black hover:text-white inline-flex items-center" style={{borderRadius: 10, border: '1px solid #000', height: 58, width: 190, marginLeft: 18}}>
                  <button style={{margin: '0 auto'}}>Add To Cart</button>
                </div>
                <div className="hover:bg-black hover:text-white inline-flex items-center" style={{borderRadius: 10, border: '1px solid black', height: 58, width: 190, marginLeft: 18}}>
                  <button name="compera" style={{margin: '0 auto'}}>+ Compare</button>
                </div>
              </div>
            </div>
          </div>
          <div className="text-product border-t-2 mt-2" style={{marginLeft: '61%'}}>
            <div className="sku mt-4" style={{display: 'grid', gridTemplateColumns: '120px 10px auto', alignItems: 'center', gap: 10, marginBottom: 10}}>
              <p className="text-sm font-medium text-gray-400 dark:text-white">SKU</p>
              <p className="text-sm font-medium text-gray-400 dark:text-white">:</p>
              <p className="text-sm font-medium text-gray-400 dark:text-white">SS001</p>
            </div>
            <div className="sku" style={{display: 'grid', gridTemplateColumns: '120px 10px auto', alignItems: 'center', gap: 10, marginBottom: 10}}>
              <p className="text-sm font-medium text-gray-400 dark:text-white">Category</p>
              <p className="text-sm font-medium text-gray-400 dark:text-white">:</p>
              <p className="text-sm font-medium text-gray-400 dark:text-white">Sofas</p>
            </div>
            <div className="sku" style={{display: 'grid', gridTemplateColumns: '120px 10px auto', alignItems: 'center', gap: 10, marginBottom: 5}}>
              <p className="text-sm font-medium text-gray-400 dark:text-white">Tags</p>
              <p className="text-sm font-medium text-gray-400 dark:text-white">:</p>
              <p className="text-sm font-medium text-gray-400 dark:text-white">Sofa, Chair, Home, Shop</p>
            </div>
            <div className="sku" style={{display: 'grid', gridTemplateColumns: '120px 10px auto', alignItems: 'center', gap: 10, marginTop: 10}}>
              <p className="text-sm font-medium text-gray-400 dark:text-white">Share</p>
              <p className="text-sm font-medium text-gray-400 dark:text-white">:</p>
              <p style={{display: 'flex', gap: 15}} className="text-sm font-medium text-gray-400 dark:text-white"><svg xmlns="http://www.w3.org/2000/svg" width={19} height={19} viewBox="0 0 20 20" fill="none">
                  <g clipPath="url(#clip0_1_336)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0 10.0558C0 15.0275 3.61083 19.1617 8.33333 20V12.7775H5.83333V10H8.33333V7.7775C8.33333 5.2775 9.94417 3.88917 12.2225 3.88917C12.9442 3.88917 13.7225 4 14.4442 4.11083V6.66667H13.1667C11.9442 6.66667 11.6667 7.2775 11.6667 8.05583V10H14.3333L13.8892 12.7775H11.6667V20C16.3892 19.1617 20 15.0283 20 10.0558C20 4.525 15.5 0 10 0C4.5 0 0 4.525 0 10.0558Z" fill="black" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_336">
                      <rect width={20} height={20} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width={19} height={19} viewBox="0 0 20 20" fill="none">
                  <g clipPath="url(#clip0_1_340)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.833313 2.36498C0.833313 1.95876 0.994685 1.56917 1.28193 1.28193C1.56917 0.994687 1.95876 0.833315 2.36498 0.833315H17.6333C17.8346 0.832986 18.034 0.872367 18.2201 0.949204C18.4062 1.02604 18.5753 1.13882 18.7177 1.2811C18.8601 1.42337 18.9731 1.59233 19.0501 1.77832C19.1272 1.96431 19.1668 2.16367 19.1666 2.36498V17.6333C19.1669 17.8347 19.1274 18.0341 19.0505 18.2202C18.9735 18.4062 18.8607 18.5753 18.7183 18.7177C18.576 18.8602 18.407 18.9731 18.2209 19.0501C18.0349 19.1272 17.8355 19.1668 17.6341 19.1666H2.36498C2.16377 19.1666 1.96453 19.127 1.77864 19.05C1.59276 18.973 1.42387 18.8601 1.28163 18.7177C1.13939 18.5754 1.02659 18.4065 0.949665 18.2205C0.872741 18.0346 0.833204 17.8354 0.833313 17.6341V2.36498ZM8.08998 7.82332H10.5725V9.06998C10.9308 8.35332 11.8475 7.70832 13.225 7.70832C15.8658 7.70832 16.4916 9.13582 16.4916 11.755V16.6066H13.8191V12.3516C13.8191 10.86 13.4608 10.0183 12.5508 10.0183C11.2883 10.0183 10.7633 10.9258 10.7633 12.3516V16.6066H8.08998V7.82332ZM3.50665 16.4925H6.17998V7.70832H3.50665V16.4916V16.4925ZM6.56248 4.84332C6.56752 5.07221 6.52679 5.2998 6.44268 5.51274C6.35857 5.72568 6.23277 5.91968 6.07267 6.08334C5.91257 6.24701 5.7214 6.37704 5.51036 6.46582C5.29932 6.5546 5.07268 6.60033 4.84373 6.60033C4.61478 6.60033 4.38814 6.5546 4.1771 6.46582C3.96606 6.37704 3.77489 6.24701 3.61479 6.08334C3.45469 5.91968 3.32889 5.72568 3.24478 5.51274C3.16067 5.2998 3.11994 5.07221 3.12498 4.84332C3.13487 4.39403 3.3203 3.96647 3.64155 3.65222C3.9628 3.33797 4.39433 3.162 4.84373 3.162C5.29313 3.162 5.72466 3.33797 6.04591 3.65222C6.36716 3.96647 6.55259 4.39403 6.56248 4.84332Z" fill="black" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_340">
                      <rect width={20} height={20} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width={23} height={23} viewBox="0 0 25 25" fill="none">
                  <path d="M12.5 1.5625C6.45996 1.5625 1.5625 6.45996 1.5625 12.5C1.5625 18.54 6.45996 23.4375 12.5 23.4375C18.54 23.4375 23.4375 18.54 23.4375 12.5C23.4375 6.45996 18.54 1.5625 12.5 1.5625ZM17.7563 9.80713C17.7637 9.92188 17.7637 10.0415 17.7637 10.1587C17.7637 13.7427 15.0342 17.8711 10.0464 17.8711C8.5083 17.8711 7.08252 17.4243 5.88135 16.6553C6.10107 16.6797 6.31104 16.6895 6.53565 16.6895C7.80518 16.6895 8.97217 16.2598 9.90234 15.5322C8.71094 15.5078 7.70996 14.7266 7.36816 13.6523C7.78564 13.7134 8.16162 13.7134 8.59131 13.6035C7.97785 13.4789 7.42645 13.1457 7.0308 12.6606C6.63515 12.1755 6.41964 11.5684 6.4209 10.9424V10.9082C6.77979 11.1108 7.20215 11.2354 7.64404 11.2524C7.27256 11.0049 6.96792 10.6695 6.75711 10.276C6.5463 9.88244 6.43585 9.443 6.43555 8.99658C6.43555 8.49121 6.56738 8.02979 6.8042 7.62939C7.48511 8.46762 8.33479 9.15318 9.29801 9.64152C10.2612 10.1299 11.3164 10.41 12.395 10.4639C12.0117 8.62061 13.3887 7.12891 15.0439 7.12891C15.8252 7.12891 16.5283 7.45605 17.0239 7.9834C17.6367 7.86865 18.2227 7.63916 18.7451 7.33154C18.5425 7.95898 18.1177 8.48877 17.5537 8.82324C18.1006 8.76465 18.6279 8.61328 19.1162 8.40088C18.7476 8.94287 18.2861 9.42383 17.7563 9.80713Z" fill="black" />
                </svg>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <hr />
  <div className="title">
    <div className="title-text flex gap-20 justify-center mt-9">
      <p className="text-xl font-medium text-gray-900 dark:text-white">Description</p>
      <p className="text-xl font-medium text-gray-400 dark:text-white">Additional Information</p>
      <p className="text-xl font-medium text-gray-400 dark:text-white">Reviews [5]</p>
    </div>
    <div className="textContent" style={{display: 'flex', justifyContent: 'center'}}>
      <div style={{textAlign: 'left'}}>
        <p className="mt-6 text-sm font-normal text-gray-400 dark:text-white">
          Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes
          the unmistakable look and
          <br /> sound of Marshall, unplugs the chords, and takes the show on the road.
        </p>
        <p className="mt-6 text-sm font-normal text-gray-400 dark:text-white">
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering.
          Setting the bar as one of the loudest
          <br /> speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio
          which boasts a clear midrange
          <br /> and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow
          you to fine-tune the controls
          <br /> to your personal preferences while the guitar-influenced leather strap enables easy and stylish
          travel.
        </p>
      </div>
    </div>
    <div className="image flex gap-10 justify-center mt-7">
      <div style={{width: 600, height: 350, backgroundColor: '#F9F1E7'}} className="image1 rounded-xl">
        <img style={{width: '100%', height: '100%'}} src={anhduoi1} alt />
      </div>
      <div style={{width: 600, height: 350, backgroundColor: '#F9F1E7'}} className="image1 rounded-xl">
        <img style={{width: '100%', height: '100%'}} src={anhduoi2} alt />
      </div>
    </div>
  </div>
  <hr className="mt-14" />
  <div className="title">
    <div className="title-text flex gap-20 justify-center mt-12">
      <p className="text-3xl font-bold text-gray-900 dark:text-white">Related Products</p>
    </div>
    <div className="new mt-10 mb-20">
      <div className="max-w-screen-xl mx-auto" style={{maxWidth: 1365}}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* CARD 1 */}
          <div className="rounded overflow-hidden flex flex-col group relative">
            <div className="relative">
              <a href="/ProductPage.html">
                <img className="w-full" src={img1} alt="Sunset in the mountains" />
                <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-50">
                </div>
              </a>
              <a href="#!">
                <div style={{borderRadius: 68, backgroundColor: '#ff3e3e'}} className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                  -30%
                </div>
              </a>
              <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-60 group-hover:bottom-4 bg-white w-9/12 p-3 mx-auto transition-all duration-300">
                <div className="text-center">
                  <h3 style={{color: 'var(--Primary, #B88E2F)'}} className="text-base font-bold">Add to cart
                  </h3>
                </div>
              </div>
            </div>
            <div className="px-4 py-7 mb-1" style={{background: 'var(--Color-Light-BG, #F4F5F7)'}}>
              <a href="/ProductPage.html" className="font-bold text-2xl inline-block hover:text-indigo-600 transition duration-500 ease-in-out mb-2">Syltherine</a>
              <p className="text-gray-500 text-sm">Stylish cafe chair</p>
              <del className="text-gray-400 text-sm mt-2">3.500.000đ</del>
            </div>
          </div>
          {/* CARD 2 */}
          <div className="rounded overflow-hidden flex flex-col group relative">
            <div className="relative">
              <a href="/ProductPage.html">
                <img className="w-full transition-opacity duration-300" src={img2} alt="Sunset in the mountains" />
                <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-50">
                </div>
              </a>
              <a href="#!">
                <div style={{borderRadius: 68, backgroundColor: '#ff3e3e'}} className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                  -30%
                </div>
              </a>
              <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-60 group-hover:bottom-4 bg-white w-9/12 p-3 mx-auto transition-all duration-300">
                <div className="text-center">
                  <h3 style={{color: 'var(--Primary, #B88E2F)'}} className="text-base font-bold">Add to cart
                  </h3>
                </div>
              </div>
            </div>
            <div className="px-4 py-7 mb-1" style={{background: 'var(--Color-Light-BG, #F4F5F7)'}}>
              <a href="/ProductPage.html" className="font-bold text-2xl inline-block hover:text-indigo-600 transition duration-500 ease-in-out mb-2">Leviosa</a>
              <p className="text-gray-500 text-sm">Stylish cafe chair</p>
              <del className="text-gray-600 font-medium mt-2">14.000.000đ</del>
            </div>
          </div>
          {/* CARD 3 */}
          <div className="rounded overflow-hidden flex flex-col group relative">
            <div className="relative">
              <a href="/ProductPage.html">
                <img className="w-full" src={img3} alt="Sunset in the mountains" />
                <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-50">
                </div>
              </a>
              <a href="#!">
                <div style={{borderRadius: 68, backgroundColor: '#ff3e3e'}} className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                  -50%
                </div>
              </a>
              <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-60 group-hover:bottom-4 bg-white w-9/12 p-3 mx-auto transition-all duration-300">
                <div className="text-center">
                  <h3 style={{color: 'var(--Primary, #B88E2F)'}} className="text-base font-bold">Add to cart
                  </h3>
                </div>
              </div>
            </div>
            <div className="px-4 py-7 mb-1" style={{background: 'var(--Color-Light-BG, #F4F5F7)'}}>
              <a href="/ProductPage.html" className="font-bold text-2xl inline-block hover:text-indigo-600 transition duration-500 ease-in-out mb-2">Lolito</a>
              <p className="text-gray-500 text-sm">Luxury big sofa</p>
              <del className="text-gray-400 text-sm mt-2">14.000.000đ</del>
            </div>
          </div>
          <div className="rounded overflow-hidden flex flex-col group relative">
            <div className="relative">
              <a href="/ProductPage.html">
                <img className="w-full" src={img4} alt="Sunset in the mountains" />
                <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-50">
                </div>
              </a>
              <a href="#!">
                <div style={{borderRadius: 68, backgroundColor: '#2EC1AC'}} className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                  New
                </div>
              </a>
              <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-60 group-hover:bottom-4 bg-white w-9/12 p-3 mx-auto transition-all duration-300">
                <div className="text-center">
                  <h3 style={{color: 'var(--Primary, #B88E2F)'}} className="text-base font-bold">Add to cart
                  </h3>
                </div>
              </div>
            </div>
            <div className="px-4 py-7 mb-1" style={{background: 'var(--Color-Light-BG, #F4F5F7)'}}>
              <a href="/ProductPage.html" className="font-bold text-2xl inline-block hover:text-indigo-600 transition duration-500 ease-in-out mb-2">Respira</a>
              <p className="text-gray-500 text-sm">Outdoor bar table and stool</p>
              <del className="text-gray-600 font-medium mt-2">5.000.000đ</del>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <button type="button" style={{width: 245, height: 48, border: '1px solid var(--Primary, #B88E2F)'}} className=" text-yellow-600 hover:text-white border hover:bg-yellow-700  font-medium text-sm px-5 py-2.5"><a href="/Home.html">
            Show More
          </a></button>
      </div>
    </div>
    <hr />
  </div></div>

        </>
    );
}
export default ProductPage;