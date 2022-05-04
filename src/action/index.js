import axios from "axios";
import { useDispatch as dispatch } from "react-redux";

export const createEmployeeData = (data1) => async (dispatch) => {
  try {
    // const data1 = {
    //   id: id,
    //   title: title,
    //   price: price,
    //   category: category,
    // };
    // console.log(data1);

    const res = await axios.post("https://fakestoreapi.com/products", data1);
    //console.log(res);
    dispatch({
      type: "CREATE",
      payload: res.data,
    });
    return {
      type: "CREATE_DATA_SUCCESS",
    };
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

export const updateEmployeeData = (id, user) => async (dispatch) => {
  try {
    // const data = {
    //   title: "test product",
    //   price: 13.5,
    //   description: "lorem ipsum set",
    //   image: "https://i.pravatar.cc",
    //   category: "electronic",
    // };
    const res = await axios.put(
      `https://fakestoreapi.com/products/${id}`,
      user
    );
    console.log(res);
    dispatch({
      type: "UPDATE",
      // payload: res.data,
    });
  } catch (e) {
    console.log(e);
  }
};
export const deleteTodo = (id) => (dispatch) => {
  try {
    const res = axios.delete(`https://fakestoreapi.com/products/${id}`); // js code
    //console.log(id);
    dispatch({
      type: "DELETE",
      id,
    });
  } catch (e) {
    console.log(e);
  }
};
