import React, { useEffect, useState } from "react";
import {
  createEmployeeData,
  readEmployeeData,
  updateEmployeeData,
} from "../action";
import { useDispatch } from "react-redux";
import "./Model1.css";

const Modeldata = ({ modal, closeModal }) => {
  const dispatch = useDispatch();
  //   useEffect(() => {
  //     dispatch(createEmployeeData());
  //   }, []);

  //   const data1 = {
  //     id,
  //     title,
  //     price,
  //     category,
  //   };

  const [error, setError] = useState("");
  const [show, setShow] = useState(true);
  // const [edit, setEdit] = useState("");
  const [state, setState] = useState({});
  //console.log(props.modal);

  useEffect(() => {
    setInitialValues();
  }, [modal]);

  const setInitialValues = () => {
    setState({ ...modal });
  };

  const { id, title, price, description, category } = state;

  const handlechanges = (e) => {
    e.preventDefault();
    if (!id || !title || !price || !description || !category) {
      setError("Please fill all the fields");
    } else {
      // alert("Save Done");
      if (modal && Object.keys({ modal }).length != 0) {
        dispatch(updateEmployeeData(state, id));
      } else {
        dispatch(createEmployeeData(state));
      }
      dispatch(readEmployeeData());
      setState({
        id: id,
        title: title,
        price: price,
        description: description,
        category: category,
      });
      setError("");
      setShow(!show);
    }
  };

  return (
    <div>
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="titleCloseBtn">
            <button onClick={() => closeModal(false)}>X</button>
          </div>
          <div className="title">
            <h1>are you sure want continue</h1>
          </div>
          <div className="body">
            <form>
              <div className="form-group">
                <label htmlFor="id">ID</label>
                <input
                  type="text"
                  className="form-control"
                  id="id"
                  name="id"
                  value={state.id || ""}
                  onChange={(e) => setState({ ...state, id: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="title">Title:</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  value={state.title || ""}
                  onChange={(e) =>
                    setState({ ...state, title: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="price">Price:</label>
                <input
                  type="text"
                  className="form-control"
                  id="price"
                  name="price"
                  value={state.price || ""}
                  onChange={(e) =>
                    setState({ ...state, price: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  name="description"
                  value={state.description || ""}
                  onChange={(e) =>
                    setState({ ...state, description: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="category">Category</label>
                <input
                  type="text"
                  className="form-control"
                  id="category"
                  name="category"
                  value={state.category || ""}
                  onChange={(e) =>
                    setState({ ...state, category: e.target.value })
                  }
                />
              </div>
            </form>
          </div>
          <div className="footer">
            <button onClick={() => closeModal(false)} id="cancelBtn">
              Cancel
            </button>
            <button onClick={handlechanges}>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modeldata;
