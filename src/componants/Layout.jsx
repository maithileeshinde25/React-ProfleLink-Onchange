import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import UserDetailsInfo from "./UserDetailsInfo";

const Layout = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUserList(data));
  }, []);
  console.log(userList);

  return (
    <div
      className="d-flex justify-content-center  "
      style={{ height: "100vh" }}
    >
      <div className="m-4  w-25 ">
        <h3 className="text-center text-primary p-3">User Profiles</h3>
        <div className=" shadow w-100 p-3 ">
          {userList.map((user) => (
            <p   key={user.id}>
              <Link to={`/${user.id}` } style={{textDecoration:"none",color:"black"}}>{user.name}</Link> <hr />
            </p>
          ))}
        </div>
      </div>

      <div className="w-75  m-4 ps-4">
        <div>
          <h3 className="text-primary p-3 text-center">User Details</h3>
          <div className="p-5 shadow ">
            <div className="d-flex  ">
              <div className="w-50">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  alt=""
                  style={{ width: "300px" }}
                />
              </div>

              <Routes>
                <Route
                  path="/:ID"
                  element={<UserDetailsInfo userList={userList} />}
                />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
