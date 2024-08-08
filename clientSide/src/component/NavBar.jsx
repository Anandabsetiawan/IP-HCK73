export default function Navbar() {
  return (
    <>
      <nav
        className="w-full sticky top-0 z-50 border-b border-gray-200 dark:border-gray-600"
        style={{
          background:
            "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
        }}
      >
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          <a className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              className="h-12"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGZ5SAWiXrfWRz_thrYoVDvFyISB8SXhz5gA&s"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white  hover:text-yellow-500">
              What THe DUck !!! Restaurant
            </span>
          </a>
          <span className="relative">
            <svg
              className="cursor-pointer hover:fill-[#6400de] inline"
              height="20px"
              viewBox="0 0 512 512"
              width="20px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                data-original="#000000"
              />
            </svg>
            <span className="absolute left-auto -ml-1 top-0 rounded-full bg-red-500 px-1 py-0 text-xs text-white">
           
            </span>
          </span>
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
                className="w-10 h-20"
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
