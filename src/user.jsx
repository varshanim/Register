import { Box } from '@mui/material';
import React from 'react';
import { useLocation } from 'react-router-dom';

const User = () => {
  
  let { state } = useLocation();
  //const { name, age } = location.state;
  //const { fullName, email, mbno, username, password, cfpassword} = state;
  return (
    
    <Box sx={{display:'flex', justifyContent:'center', flexDirection:'column', ml:4}}> 
 <h1>User Details:</h1>
 <p>Name: {state.fullName}</p>
 <p>Email: {state.email}</p>
 <p>Mobile: {state.mbno}</p>
 <p>Username: {state.username}</p>
 <p>Password: {state.password}</p>
 <p>Confirm Password: {state.cfpassword}</p> 
 </Box>
    
     /*
    <div style={{backgroundColor:"white"}}>
      <h3>Name: </h3><p>{fullName}</p>
      <h3>Email: </h3><p>{email}</p>
      <h3>Mobile Number: </h3><p>{mbno}</p>
      <h3>Username: </h3><p>{username}</p>
      <h3>Password: </h3><p>{password}</p>
      <h3>Confirm Password: </h3><p>{cfpassword}</p>
      </div> */
  );
}
export default User;
