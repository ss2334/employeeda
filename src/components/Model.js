import React, { useEffect, useState } from "react";
import {
  createEmployeeData,
  readEmployeeData,
  updateEmployeeData,
} from "../action";
import { useDispatch } from "react-redux";

const Model = ({ modal }) => {
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
      {show ? (
        <div className="modalBackground">
          {/* <button
            type="button"
            className="btn btn-info btn-lg"
            data-toggle="modal"
            data-target="#myModal"
          >
            Open Modal
          </button> */}

          <div className="modal fade in" id="myModal" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-body">
                  {error && <h1>{error}</h1>}
                  <input
                    type="text"
                    placeholder="type id"
                    id="id"
                    required
                    value={state.id || ""}
                    onChange={(e) => setState({ ...state, id: e.target.value })}
                  />
                  <br />
                  <input
                    type="text"
                    placeholder="type title"
                    id="title"
                    required
                    value={state.title || ""}
                    onChange={(e) =>
                      setState({ ...state, title: e.target.value })
                    }
                  />
                  <br />
                  <input
                    type="text"
                    placeholder="type price"
                    id="price"
                    required
                    value={state.price || ""}
                    onChange={(e) =>
                      setState({ ...state, price: e.target.value })
                    }
                  />
                  <br />
                  <input
                    type="text"
                    placeholder="type description"
                    id="description"
                    required
                    value={state.description || ""}
                    onChange={(e) =>
                      setState({ ...state, description: e.target.value })
                    }
                  />
                  <br />
                  <input
                    type="text"
                    placeholder="type category"
                    id="category"
                    required
                    value={state.category || ""}
                    onChange={(e) =>
                      setState({ ...state, category: e.target.value })
                    }
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-default"
                    onClick={handlechanges}
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className="btn btn-default"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Model;
