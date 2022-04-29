import React, { useEffect } from "react";
import { readEmployeeeData } from "../action";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./employee.css";
import emplopyeereducer from "../reducer/emplopyeereducer";
import { clear } from "@testing-library/user-event/dist/clear";

const Employeedata = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  // const handlechange = (e) => {
  //   setSearch(e.target.value);
  // };

  const { list, loading } = useSelector((state) => state.employee);
  console.log(list);

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
    dispatch(readEmployeeeData());
  }, []);

  // const add=()=>{
  //     console.log("Hello");
  // }

  let searchList = list;//doubt
  searchList = searchList.filter((i) => i.Make_Name.includes(search));
  return (
    <div>
      <h1>Car List</h1>
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
                <th>MAKE_ID</th>
                <th>MAKE_NAME</th>
              </tr>
              {searchList.map((p) => (
                <tr key={p.Make_ID}>
                  <td>
                    <a href="#">{p.Make_ID}</a>
                  </td>
                  <td>
                    <a href="#">{p.Make_Name}</a>
                  </td>
                </tr>
              ))}
              {/* {list.filter((p) => (
                <tr key={p.Make_ID}>
                  <td>
                    <a href="#">{p.Make_ID}</a>
                  </td>
                  <td>
                    <a href="#">{p.Make_Name.includes(`${search}`)}</a>
                  </td>
                </tr>
              ))} */}
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Employeedata;
