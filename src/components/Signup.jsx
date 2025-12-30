import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_BASE_URL = "http://localhost:2025/auth";

const Signup = () => {
  const [isSignup, setIsSignup] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },

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
          ? `${API_BASE_URL}/signup`
          : `${API_BASE_URL}/login`;

        const payload = isSignup
          ? values
          : { email: values.email, password: values.password };

        const response = await axios.post(url, payload, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (isSignup) {
          alert("Signup successful. Please login.");
          setIsSignup(false);
          resetForm();
        } else {
          const { token, user } = response.data;

          localStorage.setItem("token", token);
          localStorage.setItem("user", JSON.stringify(user));

          navigate("/");
        }
      } catch (error) {
        const message =
          error.response?.data?.message || "Server error. Try again.";
        alert(message);
      }
    },
  });

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center flex items-center justify-center px-4"
      style={{ backgroundImage: "url('/signup-bg.jpg')" }}
    >
      <button
        onClick={() => navigate("/")}
        className="absolute top-5 right-4 text-3xl font-bold bg-black rounded-b-full text-white"
      >
        ×
      </button>

      <div className="bg-white w-full max-w-md rounded-xl shadow-xl p-6">
        <h1 className="text-2xl font-bold text-center">Food Corner</h1>
        <h2 className="text-lg font-semibold text-center mb-6">
          {isSignup ? "SIGN UP" : "LOGIN"}
        </h2>

        <form onSubmit={formik.handleSubmit} className="space-y-4">
          {isSignup && (
            <div>
              <label>Name</label>
              <input
                name="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                className="w-full border rounded px-3 py-2"
              />
              {formik.touched.name && formik.errors.name && (
                <p className="text-red-500 text-xs">{formik.errors.name}</p>
              )}
            </div>
          )}

          <div>
            <label>Email</label>
            <input
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="w-full border rounded px-3 py-2"
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-xs">{formik.errors.email}</p>
            )}
          </div>

          <div>
            <label>Password</label>
            <input
              name="password"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className="w-full border rounded px-3 py-2"
            />
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500 text-xs">{formik.errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded"
          >
            {isSignup ? "Register" : "Login"}
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          {isSignup ? (
            <>
              Already have an account?{" "}
              <button onClick={() => setIsSignup(false)} className="underline">
                Login
              </button>
            </>
          ) : (
            <>
              Don’t have an account?{" "}
              <button onClick={() => setIsSignup(true)} className="underline">
                Sign up
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default Signup;
