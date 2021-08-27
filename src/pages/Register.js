import React from "react";

const Register = () => {
  return (
    <div class="container">
      <div>
        <h2 style={{ textAlign: "center", margin: "4rem" }}>Register</h2>
        <form style={{ textAlign: "center" }}>
          <label>Username</label>
          <br />
          <input type="text" placeholder="Enter your name" />
          <br />
          <label>Email</label>
          <br />
          <input type="email" placeholder="Enter your email.." /> <br />
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

export default Register;
