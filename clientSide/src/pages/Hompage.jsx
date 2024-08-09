import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardHome from "../component/CardHome";
import Navbar from "../component/NavBar";
import { fetchMenus } from "../feature/menu/menuSlice";
import MenusData from "../helper/instance";

export default function HomePage() {
  const [searchAi, setSearchAi] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const menus = useSelector((state) => state.menu.list.data);
  const dispatch = useDispatch();



  const searchMenusFromAI = async (e) => {
    e.preventDefault();
    if (!search.trim()) {
      setSearchAi([]);
      return;
    }
    setIsLoading(true);
    try {
      let { data } = await MenusData({
        url: `/gemini`,
        method: "POST",
        data: { query: search },
      });
      console.log(data);

      // Assuming the backend returns an array of menu items
      setSearchAi(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching AI search results:", error);
      setSearchAi([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    dispatch(fetchMenus());
   
  }, [dispatch]);

  const displayedMenus = searchAi.length > 0 ? searchAi : menus;

  return (
    <>
      <nav>
        <Navbar />
      </nav>

      <form onSubmit={searchMenusFromAI}>
        <div className="sticky top-16 z-40 bg-white py-4 px-4 shadow-md">
          <div className="flex rounded-full border-2 border-blue-500 overflow-hidden max-w-md mx-auto font-[sans-serif]">
            <input
              className="w-full outline-none bg-white text-sm px-5 py-3"
              placeholder="Search Something..."
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 px-6"
              type="submit"
            >
              <svg
                className="fill-white"
                viewBox="0 0 192.904 192.904"
                width="18px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
              </svg>
            </button>
          </div>
        </div>
      </form>

      {isLoading ? (
        <div className="text-center mt-8">Loading...</div>
      ) : (
        <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 mt-20">
          {displayedMenus.map((item) => (
            <CardHome key={item.id} menu={item}  />
          ))}
        </main>
      )}
    </>
  );
}
