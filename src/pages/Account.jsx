import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Account = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if(!localStorage.getItem('token')){
      navigate('/login');
    }
  }, []);

  return (
    <div>Account</div>
  )
}

export default Account