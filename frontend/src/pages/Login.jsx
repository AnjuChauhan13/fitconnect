import useLogin from "../services/LoginUser";

const Login = () => {
  const { username, setUsername, password, setPassword, message, handleClick } =
    useLogin();

  return (
    <>
      <div>
        <h1>Login</h1>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <br />

        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />

        <button onClick={handleClick}>Login</button>
        <p>{message}</p>
      </div>
    </>
  );
};

export default Login;
