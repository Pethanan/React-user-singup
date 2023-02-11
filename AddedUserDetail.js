import React from "react";

const AddedUserDetail = (props) =>{
return (
  <div>
  <ul>
  {props.usersList.map((user)=> <li key={user.id}> {user.name}----{user.age} years old</li>)}

  </ul>
  </div>
);
};

export default AddedUserDetail;