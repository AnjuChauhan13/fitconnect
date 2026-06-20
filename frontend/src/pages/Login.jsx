import { useState } from "react";

const Login=()=>{
    const [username, setUsername]=useState("")
    const [password, setPassword]=useState("")
    const [message, setMessage]= useState("")
   

const handleClick = async () => {
  const response = await fetch(
    "http://127.0.0.1:8000/api/token/",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    }
  );

  const data = await response.json();

  if (response.ok) {
    localStorage.setItem("access", data.access);
    localStorage.setItem("refresh", data.refresh);

    setMessage("Login Successful ");
  } else {
    setMessage("Invalid Username or Password ");
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