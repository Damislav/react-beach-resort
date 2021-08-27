import React from "react";

const Login = () => {
  return (
    <div class="container">
      <div>
        <h2 style={{ textAlign: "center", margin: "4rem" }}>Login</h2>
        <form style={{ textAlign: "center" }}>
          <label>Email</label>
          <br />
          <input type="email" placeholder="Enter your name" />
          <br />

          <label>Password</label>
          <br />
          <input type="password" placeholder="Enter your password" />
          <br />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
