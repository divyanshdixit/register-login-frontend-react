import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
import { validate } from "../utlis/validate";

const Signup = () => {
  const initUserDetails = {
    uname: "",
    email: "",
    password: "",
    cpassword: "",
  };

  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const [userDetails, setUserDetails] = useState(initUserDetails);
  const navigate = useNavigate()

  const submitDetails = async() => {
    try{
    const {uname, email, password} = userDetails;
    const postData = await fetch("http://localhost:3001/register", {
      method: "POST",
      body: JSON.stringify({
        email,
        username: uname,
        password
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const postDetails = await postData.json();
    console.log(postDetails);
    if(postData.status === 201){
      alert(`${postDetails.message}`);
      setUserDetails(initUserDetails);
      // once the user is registered, we'll redirect it to login page.
      navigate('/login');
    }else{
      alert(`${postDetails.message}`);
    }
  }catch(err){
    console.log(err);
  }
  }

  useEffect(() => {
    console.log(formErrors);
    if(Object.keys(formErrors).length === 0 && isSubmit){
      console.log(userDetails);
      submitDetails();
    }
  }, [formErrors]);

  const changeDetails = (e) => {
    setUserDetails(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      }
    });
  };

  const handleSubmit = () => {
    // first validate the form values:
    setFormErrors(validate(userDetails));
    setIsSubmit(true);
  };

  return (
    <div>
      <h1>Signup </h1>

      <form>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            placeholder="email id"
            value={userDetails.email}
            onChange={changeDetails}
          />
          <span className={error}> {formErrors.email} </span>
        </div>
        <div>
          <label htmlFor="uname">UserName: </label>
          <input
            type="text"
            name="uname"
            placeholder="username"
            value={userDetails.uname}
            onChange={changeDetails}
          />
          <span className={error}> {formErrors.uname} </span>
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={userDetails.password}
            onChange={changeDetails}
          />
          <span className={error}> {formErrors.password} </span>
        </div>
        <div>
          <label htmlFor="cpassword">Confirm Password: </label>
          <input
            type="password"
            name="cpassword"
            placeholder="confirm Password"
            value={userDetails.cpassword}
            onChange={changeDetails}
          />
          <span className={error}> {formErrors.cpassword} </span>
        </div>
        <button style={{ background: "lightblue", padding: "10px"}} type="button" onClick={handleSubmit}>
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
