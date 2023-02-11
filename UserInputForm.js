import React, {useState} from 'react';


const UserInputForm = (props) => {

    const [age, setAge] = useState("");
    const [name, setName] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const userName = name.trim();
    const userAge = parseInt(age);
    if(userName.length===0 || age<=0)
    {
        alert("Enter valid data");
    }
    else{
    const userObj = {name: userName, age: userAge};
    console.log(userObj);
    props.onGetData({...userObj, id: Math.random().toString()});
    setAge("");
    setName("");
    }
  };

  const nameChangeHandler = (e)=> {
    setName(e.target.value);

  }

  const ageChangeHandler = (e)=> {
    setAge(e.target.value);
        
  }
  return (
    <React.Fragment>
    <form onSubmit={submitHandler}>
      <label>User Name</label>
      <input type="text" name="user-name" value={name} onChange={nameChangeHandler}></input>
       <label>Age (in Years) </label>
      <input type="number" name="user-age" value={age} onChange={ageChangeHandler}></input>
      <button type="submit">Submit</button>
    </form>
    </React.Fragment>);


};

export default UserInputForm;