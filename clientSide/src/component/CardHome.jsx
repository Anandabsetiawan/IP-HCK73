import { useDispatch, useSelector } from "react-redux";
import formatToRupiah from "../helper/formatToRupiah";
import { increment } from "../feature/addorder/orderSlice";
import addToCart from "../feature/cart/cartSlice";
import MenusData from "../helper/instance";
import { Link } from "react-router-dom";
import { useState } from "react";
import { fetchMenus } from "../feature/menu/menuSlice";

export default function CardHome({  menu }) {
  const [addOrder, setAddOrder] = useState([]);
  
  const dispatch = useDispatch();

  const addButton = async (e) => {
    e.preventDefault();
    const data = await MenusData({
      url: "/order",
      method: "POST",
      data: {
        MenuId: menu.id,
        quantity: 1,
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    console.log(data.data.quantity);
    
    dispatch(fetchMenus());
  };

  const deleteButton = async (e) => {
    e.preventDefault();
    const data = await MenusData({
      url: "/order",
      method: "DELETE",
      data: {
        MenuId: menu.id,
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });

    dispatch(fetchMenus());
    
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
              <h3 className="text-xl text-white font-bold flex-1">
                Order Numbers: {menu.Orders[0]?.quantity}
              </h3>
              <button
                onClick={addButton}
                className="px-5 gx-4 py-2.5 rounded-lg font-bold text-white text-sm hover:text-purple-800 tracking-wider outline focus:outline-none focus:ring ring-purple-800 "
                type="button"
                style={{
                  background:
                    "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                }}
              >
                Add Order
              </button>
              <button
                onClick={deleteButton}
                // onClick={() => { console.log('ini masuk');
          
                className="px-5 gx-4 py-2.5 rounded-lg font-bold text-white text-sm hover:text-purple-800 tracking-wider outline focus:outline-none focus:ring ring-purple-800 "
                type="button"
                style={{
                  background:
                    "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                }}
              >
                delete Order
              </button>
            </div>
          </div>
        </div>
      </>
    );
  };

