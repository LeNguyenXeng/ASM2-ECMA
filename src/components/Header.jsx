import logo from "../assets/logo.png";
function Header() {
  return (
    <header className="header sticky top-0 bg-white shadow-md flex items-center justify-between px-8 py-02">
      {/* logo */}
      <a
        href="/"
        className="ml-2 flex items-center space-x-3 rtl:space-x-reverse"
      >
        <img src={logo} className="h-8" alt="Flowbite Logo" />
        <span className="self-center text-3xl font-bold whitespace-nowrap dark:text-white">
          Furniro
        </span>
      </a>
      {/* navigation */}
      <nav className=" ml-48 mr-6 nav font-semibold text-lg">
        <ul className="flex items-center">
          <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active">
            <a href="/">Home</a>
          </li>
          <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
            <a href="/productpage">Shop</a>
          </li>
          <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
            <a href="/pagecart">About</a>
          </li>
          <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
            <a href="/checkout">Contact</a>
          </li>
        </ul>
      </nav>
      {/* buttons -*/}
      <div className="w-3/12 flex justify-end ">
        <a href>
          <svg
            className="h-7 w-7 mr-5 hover:text-green-500 duration-200"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <circle cx={9} cy={7} r={4} />
            <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
            <line x1={19} y1={7} x2={19} y2={10} />
            <line x1={19} y1={14} x2={19} y2="14.01" />
          </svg>
        </a>
        <a href>
          <svg
            className="h-7 w-7 mr-5 hover:text-green-500 duration-200"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <circle cx={10} cy={10} r={7} />
            <line x1={21} y1={21} x2={15} y2={15} />
          </svg>
        </a>
        <a href>
          <svg
            className="h-7 w-7 mr-5 hover:text-green-500 duration-200"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </a>
        <a href>
          <svg
            className="h-7 w-7 mr-5 hover:text-green-500 duration-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </a>
      </div>
    </header>
  );
}

export default Header;
