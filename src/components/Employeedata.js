import React, { useEffect } from "react";
import {
  readEmployeeData,
  deleteTodo,
  createEmployeeData,
  updateEmployeeData,
} from "../action";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./employee.css";
import emplopyeereducer from "../reducer/emplopyeereducer";
import { clear } from "@testing-library/user-event/dist/clear";
import Model from "./Model";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Employeedata = () => {
  const [search, setSearch] = useState("");
  const [modelData, setModelData] = useState({
    id: "",
    title: "",
    price: "",
    description: "",
    category: "",
  });
  const dispatch = useDispatch();

  const { list, loading } = useSelector((state) => state.employee);
  //console.log(list);

  // const myFunction = (data) => {
  //   var input = document.getElementById("searchinput");
  //   var filter = input.value.toUpperCase();
  //   var table = document.getElementById("table");
  //   var li = table.getElementsByTagName("table");
  //   var i;
  //   for (i = 0; i < li.length; i++) {
  //    var a = li[i].getElementsByTagName("a")[0];
  //     txtValue = a.textContent || a.innerText;
  //     if (txtValue.toUpperCase().indexOf(filter) > -1) {
  //         li[i].style.display = "";
  //     } else {
  //         li[i].style.display = "none";
  //     }

  // };
  //   let employee = [
  //     {
  //       EmployeeName: "Ramesh",
  //       Age: 20,
  //       Salary: 490000,
  //       Image: "img1",
  //     },
  //     {
  //       EmployeeName: "Ramesh",
  //       Age: 24,
  //       Salary: 4900070,
  //       Image: "img1",
  //     },
  //   ];

  useEffect(() => {
    dispatch(readEmployeeData());
  }, []);

  // const DeletePerticularEmployeeData = () => {
  //   alert("Hello");
  // };

  // useEffect(() => {
  //   dispatch(createEmployeeData());
  // }, []);

  // const add=()=>{
  //     console.log("Hello");
  // }

  let searchList = list; //doubt
  // searchList = searchList.filter((i) => i.title.includes(search));
  return (
    <div>
      <Model modal={modelData} />

      <h1>Products Data</h1>
      <div class="btn-group">
        <input
          id="searchinput"
          type="search"
          class="form-control"
          placeholder="type here"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {loading ? (
        <div className="loader"></div>
      ) : (
        <div>
          <div>
            <table id="customers">
              <tr>
                <th>id</th>
                <th>title</th>
                <th>price</th>
                <th>description</th>
                <th>category</th>
                {/* <th>image</th> */}
              </tr>
              {searchList
                .filter((ele) => {
                  if (search == "") {
                    return ele;
                  } else if (
                    ele.title.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return ele;
                  }
                })
                .map((p) => (
                  <tr key={p.id}>
                    <td>
                      <a href="#">{p.id}</a>
                    </td>
                    <td>
                      <a href="#">{p.title}</a>
                    </td>
                    <td>
                      <a href="#">{p.price}</a>
                    </td>
                    <td>
                      <a href="#">{p.description}</a>
                    </td>
                    <td>
                      <a href="#">{p.category}</a>
                    </td>
                    {/* <td>
                    <a href="#">{p.image}</a>
                  </td> */}
                    <td>
                      <a href="#">
                        <button
                          className="btn btn-primary"
                          type="submit"
                          onClick={() => dispatch(deleteTodo(p.id))}
                        >
                          Delete
                        </button>
                      </a>
                    </td>
                    <td>
                      <a href="#">
                        <button
                          className="btn btn-primary"
                          type="button"
                          data-toggle="modal"
                          data-target="#myModal"
                          onClick={() => setModelData(p)}
                        >
                          Update
                        </button>
                      </a>
                    </td>
                  </tr>
                ))}
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Employeedata;
