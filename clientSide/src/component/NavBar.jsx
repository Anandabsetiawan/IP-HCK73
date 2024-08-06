export default function Navbar() {
  return (
    <>
      <nav className="bg-gradient-to-r from-red-700 to-orange-600 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          <a
            className="flex items-center space-x-3 rtl:space-x-reverse"
            href="https://flowbite.com/"
          >
            <img
              alt="Flowbite Logo"
              className="h-12"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGZ5SAWiXrfWRz_thrYoVDvFyISB8SXhz5gA&s"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              What THe DUck !!! Restaurant
            </span>
          </a>

          <div className="flex-grow mx-4 max-w-md">
            <div className="flex w-full bg-white bg-opacity-20 px-3 py-2 rounded-lg">
              <input
                className="w-full text-sm bg-transparent rounded outline-none pr-2 text-white placeholder-gray-200"
                placeholder="Search something..."
                type="text"
              />
              <svg
                className="cursor-pointer fill-white"
                viewBox="0 0 192.904 192.904"
                width="16px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
              </svg>
            </div>
          </div>

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
        </div>
      </nav>
    </>
  );
}
