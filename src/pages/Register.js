import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { registerfunction, sentOtpFunction } from "../services/Apis"; // import the sentOtpFunction
import { useNavigate } from "react-router-dom";
import "../styles/mix.css";

const Register = () => {
  const [passhow, setPassShow] = useState(false);

  const [inputdata, setInputdata] = useState({
    firstName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputdata({ ...inputdata, [name]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, email, password, confirmPassword } = inputdata;

    if (firstName === "") {
      toast.error("Enter Your Name");
    } else if (email === "") {
      toast.error("Enter Your Email");
    } else if (!email.includes("@")) {
      toast.error("Enter Valid Email");
    } else if (password === "") {
      toast.error("Enter Your Password");
    } else if (password.length < 6) {
      toast.error("Password length minimum 6 characters");
    } else if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      try {
        // Register the user
        
          // Send OTP
          const otpResponse = await sentOtpFunction({ email: inputdata.email });
          if (otpResponse.status === 200) {
            // Navigate to OTP page and pass the email to identify the user
            navigate("/otp", { state: { email: inputdata.email, firstName: inputdata.firstName, password: inputdata.password, confirmPassword: inputdata.confirmPassword } });
          } else {
            toast.error("Failed to send OTP");
        }
      } catch (error) {
        toast.error("An error occurred during registration");
      }
    }
  }

  return (
    <>
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>Sign Up</h1>
            <p style={{ textAlign: "center" }}>
              We are glad that you will be using Project Cloud to manage
              your tasks! We hope that you will like it.
            </p>
          </div>
          <form>
            <div className="form_input">
              <label htmlFor="firstName">Name</label>
              <input 
                type="text" 
                name="firstName" 
                id="firstName" 
                onChange={handleChange} 
                placeholder='Enter Your Name' 
                value={inputdata.firstName}
              />
            </div>
            <div className="form_input">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                name="email" 
                id="email"  
                onChange={handleChange}  
                placeholder='Enter Your Email Address' 
                value={inputdata.email}
              />
            </div>
            <div className="form_input">
              <label htmlFor="password">Password</label>
              <div className='two'>
                <input 
                  type={!passhow ? "password" : "text"} 
                  name="password" 
                  id="password"  
                  onChange={handleChange}  
                  placeholder='Enter Your password' 
                  value={inputdata.password}
                />
                <div className='showpass' onClick={() => setPassShow(!passhow)}>
                  {!passhow ? "Show" : "Hide"}
                </div>
              </div>
            </div>
            <div className="form_input">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <div className='two'>
                <input 
                  type={!passhow ? "password" : "text"} 
                  name="confirmPassword" 
                  id="confirmPassword"  
                  onChange={handleChange}  
                  placeholder='Confirm Your Password' 
                  value={inputdata.confirmPassword}
                />
                <div className='showpass' onClick={() => setPassShow(!passhow)}>
                  {!passhow ? "Show" : "Hide"}
                </div>
              </div>
            </div>
            <button className='btn' onClick={handleSubmit}>Sign Up</button>
            <p>Already have an account? <a href="/login">Login here</a></p>
          </form>
        </div>
        <ToastContainer />
      </section>
    </>
  );
}

export default Register;
