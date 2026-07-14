import { useState } from "react";
import { useNavigate } from "react-router-dom";
import registerUser from "../services/RegisterUser";
import "./Register.css";

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            await registerUser({
                username,
                email,
                password,
                confirmPassword,
            });

            alert("Registration Successful");

            navigate("/");

        } catch (error) {
            console.error(error);
            alert("Registration Failed");
        }
    };

    return (
        <div className="register-page">
            <main className="register-main">
                <div className="register-container">
                    <div className="register-card">
                        <h1 className="register-title">Register</h1>

                        <form className="register-form" onSubmit={handleRegister}>

                            <input
                                className="register-input"
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />

                            <input
                                className="register-input"
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <input
                                className="register-input"
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            <input
                                className="register-input"
                                type="password"
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />

                            <button className="register-button" type="submit">
                                Register
                            </button>

                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Register;
