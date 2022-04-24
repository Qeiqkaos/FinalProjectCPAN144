import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { loginToAccount, logoutOfAccount, loginSlice } from "../slices/loginSlice";
import { registerAccount } from "../slices/registerSlice";
import { useSelector } from "react-redux";

//React uses virtual DOM to compare the new state of the DOM tree with the old state
//useNavigate is a hook that allows us to navigate to a new route
//useNavigate === useHistory
export const LoginForm = () => {
  console.log("Login form rendered"); 
  //useState is a hook (js function) that returns an array with two elements (data and a function to update the data)
  // const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");//username = 'bobby' is WRONG
  const dispatch = useDispatch();
  //const [isAdmin, setIsAdmin] = useState(false);

  const token = useSelector((state) => state.login.token);
  
  // const adminCreds = {username: "admin", password: "admin"};
  // const handleLogin = (event) => {
  //   // navigate("/students");
  //   if (username === adminCreds.username && password === adminCreds.password) {
  //     setIsAdmin(true);
  //   }
  //   else {
  //     setIsAdmin(false);
  //   }
  // };

  const handleLogin = () => {
    dispatch(loginToAccount({email, password}));
    setEmail("");
    setPassword("");
  }

  const handleRegister = () => {
    dispatch(registerAccount({email, password}));
    setEmail("");
    setPassword("");
  }

  const handleLogout = () => { //Logout by Clinton Obazee
    dispatch(logoutOfAccount());
  } 

  const form = (
    <div className="login-form">
      <h1>Login</h1>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}//username = 'bobby' - WRONG
      />
      <br />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button
        disabled={email.length === 0 || password.length === 0}
        //onClick={handleLogin}
        //onClick={dispatch(loginToAccount({email, password}))} //this would execute by default.
        onClick={() => handleLogin()}
      >
        Login
      </button>
      <button
        disabled={email.length === 0 || password.length === 0}
        onClick={() => handleRegister()}
      >
        Register
      </button>
      <button //Logout by Clinton Obazee
        disabled={!token || token.length === 0}
        onClick={() => handleLogout()}
      >
        Logout
      </button>
    </div>
  );
  return form;
};