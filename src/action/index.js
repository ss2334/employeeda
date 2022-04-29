import axios from "axios";
import { useDispatch as dispatch } from "react-redux";

export const createEmployeeData = () => async (dispatch) => {
  try {
    const data1 = {
      title: "test product",
      price: 13.5,
      description: "lorem ipsum set",
      image: "https://i.pravatar.cc",
      category: "electronic",
    };

    const res = await axios.post("https://fakestoreapi.com/products", data1);
    console.log(res);
    dispatch({
      type: "CREATE",
      payload: res.data,
    });
  } catch (e) {
    console.log(e);
  }
};

export const readEmployeeData = () => async (dispatch) => {
  dispatch({
    type: "READ_REQUEST",
  });
  try {
    const res = await axios.get("https://fakestoreapi.com/products");
    // console.log(res.data);
    dispatch({
      type: "READ",
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: "READ_ERROR",
    });
    console.log(e);
  }
};

export const updateEmployeeData = () => {
  try {
    const data = {
      title: "test product",
      price: 13.5,
      description: "lorem ipsum set",
      image: "https://i.pravatar.cc",
      category: "electronic",
    };
    const res = axios.put("https://fakestoreapi.com/products/7", data);
    console.log(res);
    dispatch({
      type: "UPDATE",
      payload: res.data,
    });
  } catch (e) {
    console.log(e);
  }
};
export const deleteEmployeeData = (id) => {
  try {
    const res = axios.delete("https://fakestoreapi.com/products/6");
    dispatch({
      type: "DELETE",
      id,
    });
  } catch (e) {
    console.log(e);
  }
};
