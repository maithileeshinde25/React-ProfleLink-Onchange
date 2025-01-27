import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";  

const UserDetailsInfo = () => {
  const [user, setUser] = useState(null);
  const { ID } = useParams();
  console.log("paramsID" ,ID);
  
  
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${ID}`)
      .then((response) => response.json())
      .then((data) => setUser(data))
      
  }, [ID]); 
  console.log(user);
  


  return (
    
          <div className="w-75 p-4">
            {user ? (
              <>
                <p className="text-danger fs-1"> {user.name}</p>
                <p><b>Username:</b> {user.username}</p>
                <p><b>Company:</b> {user.company.name}</p>
                <p><b>Email:</b> {user.email}</p>
                <p><b>Phone:</b> {user.phone}</p>
                <p><b>Address:</b> {user.address.city} , {user.address.street}</p>

              </>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        
  );
};

export default UserDetailsInfo;
