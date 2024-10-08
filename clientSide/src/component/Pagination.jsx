export default function Pagination() {
  return (
    <>
      <div>
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-700 dark:text-gray-400">
            Showing{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              1
            </span>{" "}
            to{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              10
            </span>{" "}
            of{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              100
            </span>{" "}
            Entries
          </span>
          <div className="inline-flex mt-2 xs:mt-0">
            <button className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              <svg
                aria-hidden="true"
                className="w-3.5 h-3.5 me-2 rtl:rotate-180"
                fill="none"
                viewBox="0 0 14 10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 5H1m0 0 4 4M1 5l4-4"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
              Prev
            </button>
            <button className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              Next
              <svg
                aria-hidden="true"
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                fill="none"
                viewBox="0 0 14 10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-700 dark:text-gray-400">
            Showing{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              1
            </span>{" "}
            to{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              10
            </span>{" "}
            of{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              100
            </span>{" "}
            Entries
          </span>
          <div className="inline-flex mt-2 xs:mt-0">
            <button className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              <svg
                aria-hidden="true"
                className="w-3.5 h-3.5 me-2 rtl:rotate-180"
                fill="none"
                viewBox="0 0 14 10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 5H1m0 0 4 4M1 5l4-4"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
              Prev
            </button>
            <button className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              Next
              <svg
                aria-hidden="true"
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                fill="none"
                viewBox="0 0 14 10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
