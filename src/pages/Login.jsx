import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState("");

  const [userDetails, setUserDetails] = useState({
    uname: "",
    password: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem('token')){
      navigate('/account');
    }
  }, []);

  const changeDetails = (e) => {
    setUserDetails((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const submitDetails = async () => {
    console.log(userDetails)
    const {uname, password} = userDetails;
    try{
      const postData = await fetch('http://localhost:3001/login', {
        method: 'POST',
        body: JSON.stringify({
          username: uname,
          password
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const postDetails = await postData.json();
      console.log(postData, postDetails);
      if(postData.status === 200){
        setError('');
        alert(`${postDetails.message}`);
        setUserDetails({
          uname: "",
          password: "",
        });
        const token = postDetails.token;
        localStorage.setItem('token', token);
        navigate('/account');
      }else{
        setError(postDetails.error);
      }
    }catch(err){
      console.log(err);
    }
    
  }

  return (
    <div>
      <h1>Login </h1>

      <span className="error">{error}</span>
      <form>
        <div>
          <label htmlFor="uname">UserName: </label>
          <input
            type="text"
            name="uname"
            placeholder="username"
            value={userDetails.uname}
            onChange={changeDetails}
          />
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
        </div>

        <button
          type="button"
          style={{ background: "lightblue", padding: "10px" }}
          onClick={submitDetails}
        >
          {" "}
          Login{" "}
        </button>
      </form>
    </div>
  );
};

export default Login;
