import axios from "axios";
import { useDispatch as dispatch } from "react-redux";

export const createEmployeeData = () => (dispatch) => {
  try {
    const data = { Make_ID: 440, Make_Name: "ASTON MARTIN" };
    const res = axios.post(
      "https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json",
      data
    );
    dispatch({
      type: "CREATE",
      payload: res.data,
    });
  } catch (e) {
    console.log(e);
  }
};

export const readEmployeeeData = () => async (dispatch) => {
    dispatch({
        type: "READ_REQUEST"
      });
  try {
    const res = await axios.get(
      "https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json"
    );
    console.log(res);
    dispatch({
      type: "READ",
      payload: res.data.Results,
    });
  } catch (e) {
    dispatch({
        type: "READ_ERROR"
      });
    console.log(e);
  }
};

export const updateEmployeeData = () => {
  try {
    const data = { Make_ID: 440, Make_Name: "ASTON MARTIN123" };
    const res = axios.put(
      "https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json",
      data
    );
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
    const res = axios.delete(
      "https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json",
      { data: { MAKE_ID: 442 } }
    );
    dispatch({
      type: "DELETE",
      id,
    });
  } catch (e) {
    console.log(e);
  }
};
