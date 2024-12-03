function Footer() {
  return (
    <footer className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/*Grid*/}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 gap-y-8 md:gap-8 py-10 max-w-sm mx-auto sm:max-w-3xl lg:max-w-full">
          <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
            <a href className="flex justify-center lg:justify-start">
              <span className="self-center text-3xl font-bold whitespace-nowrap dark:text-white">
                Furniro.
              </span>
            </a>
            <p className="py-8 text-sm text-gray-500 lg:max-w-xs text-center lg:text-left">
              400 University Drive Suite 200 Coral Gables,
              <br />
              FL 33134 USA
            </p>
          </div>
          {/*End Col*/}
          <div className="lg:mx-auto text-left ">
            <h4 className="text-lg text-gray-400 font-medium mb-7">Links</h4>
            <ul className="text-sm  transition-all duration-500">
              <li className="mb-6">
                <a
                  href="javascript:;"
                  className="text-gray-900 hover:text-gray-900, font-medium mb-7"
                >
                  Home
                </a>
              </li>
              <li className="mb-6">
                <a
                  href="javascript:;"
                  className="text-gray-900 hover:text-gray-900, font-medium mb-7"
                >
                  Shop
                </a>
              </li>
              <li className="mb-6">
                <a
                  href="javascript:;"
                  className="text-gray-900 hover:text-gray-900, font-medium mb-7"
                >
                  About
                </a>
              </li>
              <li className="mb-6">
                <a
                  href="javascript:;"
                  className="text-gray-900 hover:text-gray-900, font-medium mb-7"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/*End Col*/}
          <div className="lg:mx-auto text-left ">
            <h4 className="text-lg text-gray-400 font-medium mb-7">Help</h4>
            <ul className="text-sm  transition-all duration-500">
              <li className="mb-6">
                <a
                  href="javascript:;"
                  className="text-gray-900 hover:text-gray-900, font-medium mb-7"
                >
                  Payment Options
                </a>
              </li>
              <li className="mb-6">
                <a
                  href="javascript:;"
                  className="text-gray-900 hover:text-gray-900, font-medium mb-7"
                >
                  Returns
                </a>
              </li>
              <li className="mb-6">
                <a
                  href="javascript:;"
                  className="text-gray-900 hover:text-gray-900, font-medium mb-7"
                >
                  Privacy Policies
                </a>
              </li>
            </ul>
          </div>
          {/*End Col*/}
          <div className="lg:mx-auto text-left ">
            <h4 className="text-lg text-gray-400 font-medium mb-7">
              Newsletter
            </h4>
            <div className="button" style={{ display: "flex" }}>
              <input
                style={{ borderBottom: "1px solid black", fontSize: 15 }}
                type="email"
                placeholder="Enter Your Email Address"
                required
              />
              <button
                className="font-medium"
                style={{ borderBottom: "1px solid black", marginLeft: 15 }}
              >
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
        {/*Grid*/}
        <div className="py-7 border-t border-gray-200">
          <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
            <span className="text-sm text-gray-900 ">
              2023 furino. All rights reverved
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
