import React, {useState} from 'react';
import { Link, useFormAction, useHref, useNavigate } from "react-router-dom";
import { Box} from '@mui/system';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';



const Register = ({onSubmit}) => {

  const href = useHref("/login");

  // const dataToPass = { name: 'John Doe', age: 25 }; 
  const navigate = useNavigate();
  const [userData,setUserData] = useState({fullName:'',email:'',mbno:'',username:'',password:'',cfpassword:''});
  const handleChange = (e) => {
  let name = e.target.name
  setUserData((prev)=> (prev = {...prev ,[name]:e.target.value}))
  console.log(setUserData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(userData);
  };
  

  return (
    <React.Fragment>
    <Box sx={{display:'flex', flexDirection:'column', alignItems:"center",justifyContent:'center', backgroundImage: `url(bg.jpeg)`,backgroundSize: "cover", width:'100vw'}}>
    <Box  sx={{display:'flex', justifyContent:'center'}}>
      <Box sx={{}}>
        <Typography variant="h3"   sx={{ display:'flex', my:4}}>
          <img src="./src/assets/Logo.png" alt="" /><Typography variant="h3" sx={{display:'flex',justifyContent:'center'} }>HighBridge</Typography>
        </Typography>
      </Box>

    </Box>
    <Box sx={{backgroundColor:'#ffffff', display:'flex', flexDirection:'column', alignItems:'center',justifyContent:'center', width:'50vw'}}>
    <form onSubmit={handleSubmit}>
    <Box sx={{display:'flex', flexDirection:'column', justifyContent:'space-between',color:'black', width:'40ch', mt:2, ml:5}}>
     
      <p style={{display:'flex', justifyContent:'left'}}>Enter your Full Name:</p>
    <TextField
    required
    id='FullName'
    name="fullName"
    label="Full Name"
    value={userData.fullName}
    defaultValue=""
    onChange={handleChange}
    />
    <p style={{display:'flex', justifyContent:'left'}}>Enter a valid Email address:</p>
    <TextField 
    required
    id='Email'
    type='email'
    value={userData.email}
    name="email"
    label="Email Id"
    defaultValue=""
    onChange={handleChange}
    />
    <p style={{display:'flex', justifyContent:'left'}}>Enter your Mobile Number:</p>
    <TextField 
    required
    id='MobileNo'
    value={userData.mbno}
    name="mbno"
    label="Mobile Number"
    defaultValue=""
    onChange={handleChange}
    />
    <p style={{display:'flex', justifyContent:'left'}}>Enter a Username:</p>
    <TextField 
    required
    id='Username'
    value={userData.username}
    name="username"
    label="Username"
    defaultValue=""
    onChange={handleChange}
    />
    <p style={{display:'flex', justifyContent:'left'}}>Enter a password:</p>
    <TextField
    required
    id='Password'
    name="password"
    value={userData.password}
    type='Password'
    label="Password"
    defaultValue=""
    onChange={handleChange}
    /> 
    <p style={{display:'flex', justifyContent:'left'}}>Confirm Password:</p>
    <TextField
    sx={{mb:2}}
    required
    id="ConfirmPassword"
    value={userData.cfpassword}
    name="cfpassword"
    type='Password'
    label="Confirm Password"
    defaultValue=""
    onChange={handleChange}
    /></Box>
    <FormGroup>
      <FormControlLabel  required control={<Checkbox/>} label="By creating an account, you are agreeing to our terms and condiitons and privacy policy." sx={{display:'flex', color:'black', ml:1}}></FormControlLabel>
    </FormGroup>
    <Button variant="contained" size='large' sx={{mt:2, display:'flex', justifyContent:'center', ml:4, mr:4}} component={Link} to={{pathname:'/user'}} state={userData} > Sign Up</Button>
    <Link to={href}>Click to go to Login Page</Link>
    <Button variant="outlined" size="large"  onClick={() => navigate('/login')}>Navigate to Login Page</Button>
    <Button variant="outlined" size="large" formAction={useFormAction("destroy")} formMethod="post">Clear all Fields</Button>
    <Typography sx={{display:'flex', justifyContent:'center', color:'black'}}><p>Already have an account? <Link href="#" > SIGN IN HERE</Link></p></Typography>
    </form>
    </Box>
    </Box>
    </React.Fragment>
  )
}
export default Register;

