import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardHome from "../component/CardHome";
import Navbar from "../component/NavBar";
// import MenusData from "../helper/instance";
import { fetchMenus } from "../feature/menu/menuSlice";

export default function HomePage() {
  const menus = useSelector((state) => state.menu.list.data);
  console.log(menus, "<<<<<<<<<<<<<<<<<<<<MENUS ");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMenus());
  }, []);
  return (
    <>
      <Navbar />
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 mt-20">
    {menus.map((item) => (
        <CardHome menu={item} />
      ))}
    </div>
     
    </>
  );
}
