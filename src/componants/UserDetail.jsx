// import React, { useEffect, useState } from "react";
// import { Link, useParams, Routes, Route } from "react-router-dom";

// const UserDetail = () => {
//   const [userList, setUserList] = useState([]);


//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((data) => setUserList(data))
      
//   }, []);
//   console.log("userList",userList);

  

//   return (
//     <>
//       {userList.map((d, i) => (
//         <>
//           <p key={i}>
//             <Link to={`/${d.id}`}>{d.name}</Link>{" "}
//           </p>
//         </>
//       ))}
//     </>
//   );
 
 
  

// };

// export default UserDetail;




// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const UserDetail = () => {
  // const [userList, setUserList] = useState([]);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((data) => setUserList(data))
  //     .catch((error) => console.error("Error fetching users:", error));
  // }, []);

  // console.log("userList", userList);

  // return (
  //   <div>
      {/* {userList.length > 0 ? (
        userList.map((d) => (
          <p key={d.id}>
            <Link to={`/${d.id}`}>{d.name}</Link>
          </p>
        ))
      ) : (
        <p>Loading users...</p>
      )} */}
//     </div>
//   );
// };

// export default UserDetail;
