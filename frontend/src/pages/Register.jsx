import { useState } from "react";

const Register=()=>{
    const[username,setUsername]=useState("");
    const[email,setEmail]=useState("");
    const[password,setassword]=useState("");
    const [confirmPassword, setConfirmPassword]=useState("");

 const handleRegister = async () => {
    try {
        const response = await api.post("/api/accounts/register/", {
            username,
            email,
            password,
            confirmPassword,
        });

        console.log(response.data);

        // Optional
        alert("Registration Successful!");

    } catch (error) {
        console.error(error);

        if (error.response) {
            console.log(error.response.data);
        }
    }
};
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