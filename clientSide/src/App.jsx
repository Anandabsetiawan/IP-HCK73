import { useDispatch, useSelector } from "react-redux";
import {RouterProvider} from "react-router-dom"
// import { LoginPage } from "./pages/LoginPage";
// import { RegisterPage } from "./pages/RegisterPage";
// import {
//   increment,
//   decrement,
//   incrementByAmount,
// } from "./feature/addorder/orderSlice";
import Navbar from "./component/NavBar";
import NavbarDetail from "./component/NavBarDetail";
import CardHome from "./component/CardHome";
import CardDetail from "./component/CardDetail";
import router from "./router";

export default function App() {
  // `store` is the global state variable
  // `counter` is the slice name, defined in step 4. inside reducer object
  // `value` is the state variable inside the counterSlice
  const counter = useSelector((store) => store.order.value);

  // the `dispatch` method should take from `useDispatch` hook
  const dispatch = useDispatch();

  return (
    
    <RouterProvider router ={router} />
        
  );
}

