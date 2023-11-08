import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/auth'; // Adjust the relative path as needed

const buttonStyle = {
  backgroundColor: '#007bff',
  color: 'white',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '14px',
  textDecoration: 'none',
};

const Adoption2Signup = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      {user ? (
        <NavLink to="/" style={buttonStyle}>
          Go to Pet Profiles
        </NavLink>
      ) : (
        <NavLink to="/signup" style={buttonStyle}>
          Sign Up
        </NavLink>
      )}
    </div>
  );
};

export default Adoption2Signup;
