import { useState } from "react";

const Register=()=>{
    const[username,setUsername]=useState("");
    const[email,setEmail]=useState("");
    const[password,setassword]=useState("");
     const [confirmPassword, setConfirmPassword]=useState("");

    const handleRegister = async () => {
      console.log(password,"p")

    const response = await fetch(
        "http://127.0.0.1:8000/api/accounts/register/",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password,
                confirmPassword:confirmPassword
            })
        }
    );

    const data = await response.json();

    console.log(data);
}
    return(
        <>
        <div>
            <h1>Register</h1>
            <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            />
            
            <br /><br />
            <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
        <br /><br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />
      <input
            type="text"
            placeholder="confirm password"
            value={confirmPassword}
            onChange={(e)=>setConfirmPassword(e.target.value)}
            />
                        <br /><br />

      <button onClick={handleRegister}>Register</button>
            
        </div>
        
        
        
        
        </>
    );


}
export default Register;