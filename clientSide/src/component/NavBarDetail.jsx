export default function NavbarDetail() {
  return (
    <>
      <nav className="bg-gradient-to-r from-red-700 to-orange-600 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            className="flex items-center space-x-3 rtl:space-x-reverse"
            href="https://flowbite.com/"
          >
            <img
              alt="Flowbite Logo"
              className="h-12"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGZ5SAWiXrfWRz_thrYoVDvFyISB8SXhz5gA&s"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              What THe DUck !!! Restaurant
            </span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              className="text-red-600 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-lg text-sm px-4 py-2 text-center"
              type="button"
            >
              Log Out
            </button>
            <button
              aria-controls="navbar-sticky"
              aria-expanded="false"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-gray-200"
              data-collapse-toggle="navbar-sticky"
              type="button"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 17 14"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1h15M1 7h15M1 13h15"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
              <li>
                <a
                  aria-current="page"
                  className="block py-2 px-3 text-white hover:text-gray-200 rounded md:bg-transparent md:p-0"
                  href="#"
                >
                  Home
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
