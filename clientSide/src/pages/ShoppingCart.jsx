import { useState, useEffect } from "react";
import MenusData from "../helper/instance";
import { useParams } from "react-router-dom";

const ShoppingCart = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams()

  useEffect(() => {
    fetchMenuItems();
  }, [id]);

  const fetchMenuItems = async () => {
    try {
      console.log("Fetching menu items...");
      let response;
      if (id) {
        console.log(`Fetching menu item with id: ${id}`);
        response = await MenusData({
          url: `/menus/${id}`,
          method: "GET",
        });
      } else {
        console.log("Fetching all menu items");
        response = await MenusData({
          url: "/menus",
          method: "GET",
        });
      }
      console.log("API Response:", response);
      // ... rest of the function
    } catch (err) {
      console.error(
        "Error details:",
        err.response ? err.response.data : err.message
      );
      // ... rest of error handling
    }
  };

  const addToCart = async (menuId) => {
    try {
      const response = await MenusData({
        url: "/order",
        method: "POST",
        data: {
          MenuId: menuId,
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });

      updateCart();
    } catch (err) {
      setError("Failed to add item to cart");
    }
  };

  const removeFromCart = async (menuId) => {
    try {
      const response = await MenusData({
        url: "/order",
        method: "DELETE",
        data: {
          MenuId: menuId,
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      updateCart();
    } catch (err) {
      setError("Failed to remove item from cart");
    }
  };

  const updateCart = async () => {
    try {
      const response = await MenusData({
        url: "/order",
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      setCart(response.data);
    } catch (err) {
      setError("Failed to update cart");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Menu Items</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {menuItems.map((item) => (
          <div key={item.id} className="border p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p>{item.description}</p>
            <p className="font-bold mt-2">Price: ${item.price}</p>
            <button
              onClick={() => addToCart(item.id)}
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li
              key={item.MenuId}
              className="flex justify-between items-center border-b py-2"
            >
              <span>
                {item.Menu.name} - Quantity: {item.quantity}
              </span>
              <div>
                <button
                  onClick={() => addToCart(item.MenuId)}
                  className="bg-green-500 text-white px-2 py-1 rounded mr-2 hover:bg-green-600"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item.MenuId)}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                >
                  -
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ShoppingCart;
