import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
import { registerfunction } from "../services/Apis";

const Otp = () => {
  const [otp, setOtp] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (otp === "" || otp.length !== 6 || /[^0-9]/.test(otp)) {
      toast.error("Please enter a valid OTP.");
    } else {
      try {
        const data = { otp, email: location.state.email, firstName: location.state.firstName, password: location.state.password, confirmPassword: location.state.confirmPassword};
        const response = await registerfunction(data);
        console.log(response)

        if (response.status === 200) {
          localStorage.setItem("userdbtoken", response.data.userToken);
          toast.success(response.data.message);
          setTimeout(() => {
            navigate("/dashboard");
          }, 2000);
        } else {
          toast.error(response.response.data.error);
        }
      } catch (error) {
        toast.error("An error occurred during OTP verification.");
      }
    }
  };

  return (
    <section>
      <div className="form_data">
        <div className="form_heading">
          <h1>Please Enter Your OTP Here</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form_input">
            <label htmlFor="otp">OTP</label>
            <input
              type="text"
              name="otp"
              id="otp"
              onChange={handleChange}
              placeholder="Enter Your OTP"
              value={otp}
            />
          </div>
          <button className="btn" type="submit">Submit</button>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Otp;
