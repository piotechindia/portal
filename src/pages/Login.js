import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { userVerify } from "../services/Apis"; // Update this import according to your API file

const Login = () => {
  const [inputdata, setInputdata] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputdata({ ...inputdata, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = inputdata;

    if (!email || !password) {
      toast.error("Please fill in all fields.");
    } else {
      try {
        const response = await userVerify({ email, password });
        if (response.status === 200) {
          localStorage.setItem("userdbtoken", response.data.userToken);
          toast.success("Login successful!");
          setTimeout(() => {
            navigate("/dashboard");
          }, 2000);
        } else {
          toast.error(response.response.data.error);
        }
      } catch (error) {
        toast.error("An error occurred during login.");
      }
    }
  };

  return (
    <section>
      <div className="form_data">
        <div className="form_heading">
          <h1>Login</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form_input">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="Enter Your Email Address"
              value={inputdata.email}
            />
          </div>
          <div className="form_input">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="Enter Your Password"
              value={inputdata.password}
            />
          </div>
          <button className="btn" type="submit">Login</button>
          <p>Don't have an account? <a href="/register">Sign Up</a></p>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Login;
