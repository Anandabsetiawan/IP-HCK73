import { useDispatch, useSelector } from "react-redux";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import {
  increment,
  decrement,
  incrementByAmount,
} from "./feature/addorder/orderSlice";

export default function App() {
  // `store` is the global state variable
  // `counter` is the slice name, defined in step 4. inside reducer object
  // `value` is the state variable inside the counterSlice
  const counter = useSelector((store) => store.order.value);

  // the `dispatch` method should take from `useDispatch` hook
  const dispatch = useDispatch();

  return (
    <div>
      <h4>Global Counter : {counter} </h4>
      {/* to dispatching an action, we can call the action creator */}
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      {/* to send the argument to the reducer function just send via function params */}
      <button onClick={() => dispatch(incrementByAmount(2))}>
        Increment by 2
      </button>
    </div>
  );
}

