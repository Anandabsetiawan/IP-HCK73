export default function CardHome() {
  return (
    <>
      <div
        className="w-full max-w-sm rounded-2xl font-[sans-serif] overflow-hidden mx-auto mt-4 border-b border-gray-200 dark:border-gray-600"
        style={{
          background:
            "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
        }}
      >
        <div className="flex flex-col items-center">
          <img
            className="w-60 h-60 rounded-full object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYVxgSSHicabC3aTHzdOzHBUUfJAtkRptQTg&s"
          />
          <div className="mt-6 text-center">
            <p className="text-base text-gray-200 font-bold uppercase">
              Ayam Penyet
            </p>
            <h3 className="text-black text-wrap text-base mt-3 leading-relaxed">
              Ayam penyet Javanese for squeezed fried chicken is Indonesian more
              precisely East Javanese cuisine fried chicken dish consisting of
              fried chicken that is squeezed with the pestle against the mortar
              to make it softer, and is served with sambal, slices of cucumbers,
              fried tofu, and tempeh mostly cucumber.
            </h3>
          </div>
          <div className="mt-8 flex items-center flex-wrap gap-12 mb-4">
            <h3 className="text-xl text-white font-bold flex-1">Rp 45.000</h3>
            <button
              className="px-5 gx-4 py-2.5 rounded-lg font-bold text-white text-sm hover:text-purple-800 tracking-wider outline focus:outline-none focus:ring ring-purple-800 "
              type="button"
              style={{
                background:
                  "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
              }}
            >
              See Menu
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
