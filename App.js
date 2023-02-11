import React, {useState} from 'react';
import UserInputForm from "./UserInputForm";
import AddedUserDetail from "./AddedUserDetail"


export default function App(props) 
{

    const [usersData, setusersData] = useState([]);
    
    const getDataHandler = (data) => {
      setusersData(()=>[...usersData, data]);
      console.log(data);

  };


  return (
    <div className='App'>
    <UserInputForm onGetData={getDataHandler}> </UserInputForm>
    <AddedUserDetail usersList={usersData}>{}</AddedUserDetail>
      
      
    </div>
  );
}

// Log to console
