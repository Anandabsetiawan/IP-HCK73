import { useDispatch, useSelector } from "react-redux";
import formatToRupiah from "../helper/formatToRupiah";
import { increment } from "../feature/addorder/orderSlice";
import addToCart from "../feature/cart/cartSlice";
import MenusData from "../helper/instance";

export default function CardHome({ menu }) {
  // const menus = useSelector((state) => state.menu.list.data)
  const dispatch = useDispatch();
  try {
    const handleAddToCart = () => {
      dispatch(
        addToCart({
          id: menu.id,
          name: menu.name,
          price: menu.price,
          quantity: 1,
        })
      );
    };
  } catch (error) {
    console.log(error.response);
  }

  return (
    <>
      <div
        className=" w-full max-w-sm rounded-2xl font-[sans-serif] overflow-hidden mx-auto mt-4 border-b border-gray-200 dark:border-gray-600"
        style={{
          background:
            "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
        }}
      >
        <div className="flex flex-col items-center">
          <img
            className="w-60 h-60 rounded-full object-cover"
            src={menu.imageUrl}
          />
          <div className="mt-6 text-center">
            <p className="text-base text-gray-200 font-bold uppercase">
              {menu.name}
            </p>
            <h3 className="text-black text-wrap text-base mt-3 leading-relaxed">
              {/* if (menu.description === ) {
                
              } */}
              {menu.description}
            </h3>
          </div>
          <div className="mt-8 flex items-center flex-wrap gap-12 mb-4">
            <h3 className="text-xl text-white font-bold flex-1">
              {formatToRupiah(menu.price)}
            </h3>
            <button
              className="px-5 gx-4 py-2.5 rounded-lg font-bold text-white text-sm hover:text-purple-800 tracking-wider outline focus:outline-none focus:ring ring-purple-800 "
              type="button"
              style={{
                background:
                  "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
              }}
              onClick={handleAddToCart}
            >
              Add Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
