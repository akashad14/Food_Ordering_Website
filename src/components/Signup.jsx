import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Signup = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      name: isSignup
        ? Yup.string().min(2, "Too short").required("Name is required")
        : Yup.string(),
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string()
        .min(6, "Min 6 characters")
        .required("Password is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const url = isSignup
          ? "http://localhost:2025/api/signup"
          : "http://localhost:2025/api/login";

        const response = await axios.post(url, values);

        console.log("Success:", response.data);
        alert(`${isSignup ? "Signup" : "Signin"} Successful!`);
        resetForm();
        if (isSignup) {
          setIsSignup(false); // show login form
        } else {
          navigate("/"); // redirect to home
        }
      } catch (error) {
        console.error("API Error:", error.response?.data || error.message);
        alert("Something went wrong. Please try again.");
      }
    },
  });

  if (!isOpen) return null;

  return (
    <div
      className="relative overflow-hidden w-full h-[500px] md:h-full bg-cover bg-center flex items-center"
      style={{
        backgroundImage: "url('/signup-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Close Button */}
      <button
        onClick={() => setIsOpen(false)}
        className="absolute top-3 right-3 text-2xl font-bold text-white hover:text-red-500"
      >
        ×
      </button>

      <div className="bg-white shadow-lg rounded-lg p-8 w-[90%] max-w-md ml-36">
        <h1 className="text-2xl font-bold mb-2 text-center">Food Corner</h1>
        <h2 className="text-xl font-semibold mb-4 text-center">
          {isSignup ? "SIGN UP" : "SIGN IN"}
        </h2>

        <form className="space-y-4" onSubmit={formik.handleSubmit}>
          {isSignup && (
            <div>
              <label className="block text-sm font-medium mb-1">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full border px-3 py-2 rounded outline-none"
              />
              {formik.touched.name && formik.errors.name && (
                <p className="text-red-500 text-sm">{formik.errors.name}</p>
              )}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium mb-1">Your Email</label>
            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full border px-3 py-2 rounded outline-none"
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm">{formik.errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full border px-3 py-2 rounded outline-none"
            />
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500 text-sm">{formik.errors.password}</p>
            )}
          </div>

          {!isSignup ? (
            <div className="flex justify-between text-sm text-gray-600">
              <label>
                <input type="checkbox" className="mr-1" />
                Remember me
              </label>
              <a href="#" className="hover:underline">
                Forgot password?
              </a>
            </div>
          ) : (
            <div className="flex items-center text-sm">
              <input type="checkbox" className="mr-2" />
              <span className="text-gray-600">
                I Accept{" "}
                <span className="text-orange-500">Terms And Condition</span>
              </span>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded"
          >
            {isSignup ? "Register" : "Sign in"}
          </button>
        </form>

        <p className="text-sm mt-4 text-center">
          {isSignup ? (
            <>
              Already have an account?{" "}
              <button
                className="font-semibold text-black underline"
                onClick={() => setIsSignup(false)}
              >
                Sign in
              </button>
            </>
          ) : (
            <>
              Don’t have an account?{" "}
              <button
                className="font-semibold text-black underline"
                onClick={() => setIsSignup(true)}
              >
                Sign Up
              </button>
            </>
          )}
        </p>

        <p className="text-xs text-center text-gray-500 mt-6">
          © 2025 Food Corner. Design by Akash
        </p>
      </div>
    </div>
  );
};

export default Signup;
