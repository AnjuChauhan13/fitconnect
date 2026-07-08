import { useState } from "react";

const Login=()=>{
    const [username, setUsername]=useState("")
    const [password, setPassword]=useState("")
    const [message, setMessage]= useState("")
   

const handleClick = async () => {
  try {
    const response = await api.post("/api/token/", {
      username,
      password,
    });

    localStorage.setItem("access", response.data.access);
    localStorage.setItem("refresh", response.data.refresh);

    setMessage("Login Successful");
  } catch (error) {
    setMessage("Invalid Username or Password");
    console.error(error);
  }
};

return(
    <>
    
    <div>
     <h1>Login</h1>
     <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            />
                        <br /><br />

    <input
            type="text"
            placeholder="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
                        <br /><br />

    

            <button onClick={handleClick}>Login</button>
            <p>{message}</p>
    </div>
    
    
    
    </>
)
}
export default Login;