
import { createSlice } from "@reduxjs/toolkit";
import MenusData from "../../helper/instance";

export const menuSlice = createSlice({
  name: "menus",
  initialState: {
    // `list` property to store the list of movies from `/pub/movies`
    list: {
      data: [],

    },
   
    detail: {}
  },
  reducers: {
    setMenus: (state, action) => {
      console.log(action.payload,"<<<<<<<<<<<<<<<PAYLOAD");
      
      state.list.data = action.payload;
    },
    setMenu: (state, action) => {
      state.detail = action.payload;
    },
  },
});

export const { setMenus, setMenu } = menuSlice.actions;

export default menuSlice.reducer;


export const fetchMenus = () => {
  return async (dispatch) => {
    
    const { data } = await MenusData({
      url: '/menus',
      method: "GET",
      headers: {
        Authorization:`Bearer ${localStorage.getItem("accessToken")}`,
      }
 
    });
    dispatch(setMenus(data));
  };
};

export const fetchMenuById = (MenuId) => {

  return async (dispatch) => {

    const { data } = await MenusData.get({
      url: '/menus/'+ MenuId,
      method: "GET",
      headers: {
        Authorization:`Bearer ${localStorage.getItem("accessToken")}`,
      }
 
    });
    dispatch(setMenu(data));
  };
};
