import React, { useEffect } from "react";
import { readEmployeeeData } from "../action";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./employee.css";
import emplopyeereducer from "../reducer/emplopyeereducer";

const Employeedata = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const handlechange = (e) => {
    setSearch(e.target.value);
  };

  const {list,loading} = useSelector((state) => state.employee);
  console.log(list);
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
  return (
    <div>
      <h1>Car List</h1>

      {loading ? <div>loading</div>:<table>
        <tr>
          <th>Make_ID</th>
          <th>Make_Name</th>
        </tr>
        <tr>
          <td>440</td>
          <td>ASTON MARTIN</td>
        </tr>
      </table>}

      <input type="search" placeholder="type here" onChange={handlechange} />
    </div>
  );
};

export default Employeedata;
