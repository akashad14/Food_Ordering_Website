import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_BASE_URL = "http://localhost:2025/auth";

export default function Auth() {
  const [mode, setMode] = useState("login"); // login | signup
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    validationSchema: Yup.object({
      name:
        mode === "signup"
          ? Yup.string().min(2).required("Full name required")
          : Yup.string(),
      email: Yup.string().email("Invalid email").required("Email required"),
      password: Yup.string().min(6).required("Password required"),
      confirmPassword:
        mode === "signup"
          ? Yup.string()
              .oneOf([Yup.ref("password")], "Passwords must match")
              .required("Confirm password required")
          : Yup.string(),
    }),

    onSubmit: async (values) => {
      try {
        const url =
          mode === "signup"
            ? `${API_BASE_URL}/signup`
            : `${API_BASE_URL}/login`;

        const payload =
          mode === "signup"
            ? values
            : { email: values.email, password: values.password };

        const { data } = await axios.post(url, payload);

        if (mode === "signup") {
          alert("Account created. Please login.");
          setMode("login");
          return;
        }

        // ✅ LOGIN SUCCESS
        const normalizedUser = {
          id: data.user.id || data.user._id,
          name: data.user.name,
          email: data.user.email,
        };

        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(normalizedUser));

        // Ensure cart exists
        const cartKey = `cart_${normalizedUser.id}`;
        if (!localStorage.getItem(cartKey)) {
          localStorage.setItem(cartKey, JSON.stringify([]));
        }

        navigate("/");
      } catch (err) {
        alert(err.response?.data?.message || "Authentication failed");
      }
    },
  });

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
      style={{ backgroundImage: "url('/signup.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-12 h-12 bg-orange-500 rounded-full mx-auto flex items-center justify-center text-white text-xl mb-3">
            🍽️
          </div>
          <h1 className="text-3xl font-bold text-gray-800">
            {mode === "login" ? "Welcome Back" : "Join Food Corner"}
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            {mode === "login"
              ? "Fast delivery. Fresh food. Happy you."
              : "Get delicious food delivered in minutes"}
          </p>
        </div>

        {/* Toggle */}
        <div className="flex bg-gray-200 rounded-full p-1 mb-6">
          <button
            onClick={() => setMode("login")}
            className={`flex-1 py-2 rounded-full text-sm font-semibold transition ${
              mode === "login"
                ? "bg-orange-500 text-white"
                : "text-gray-600"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setMode("signup")}
            className={`flex-1 py-2 rounded-full text-sm font-semibold transition ${
              mode === "signup"
                ? "bg-orange-500 text-white"
                : "text-gray-600"
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* Form */}
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          {mode === "signup" && (
            <Input
              label="Full Name"
              name="name"
              placeholder="Enter your full name"
              formik={formik}
            />
          )}

          <Input
            label="Email Address"
            name="email"
            type="email"
            placeholder="you@example.com"
            formik={formik}
          />

          <Input
            label="Password"
            name="password"
            type="password"
            placeholder="••••••••"
            formik={formik}
          />

          {mode === "signup" && (
            <Input
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              placeholder="••••••••"
              formik={formik}
            />
          )}

          {mode === "login" && (
            <p className="text-right text-sm text-red-500 cursor-pointer">
              Forgot password?
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-semibold transition"
          >
            {mode === "login" ? "Login to Your Account" : "Create Your Account"}
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center gap-3">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-xs text-gray-400">OR CONTINUE WITH</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Social */}
        <div className="flex gap-4">
          <SocialButton label="Google" />
          <SocialButton label="Facebook" />
        </div>

        {/* Footer */}
        <p className="text-xs text-center text-gray-500 mt-6">
          By continuing, you agree to our{" "}
          <span className="text-orange-600 font-semibold">
            Terms of Service
          </span>{" "}
          and{" "}
          <span className="text-orange-600 font-semibold">Privacy Policy</span>
        </p>
      </div>
    </div>
  );
}

/* ---------- Reusable Components ---------- */

function Input({ label, formik, ...props }) {
  return (
    <div>
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <input
        {...props}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[props.name]}
        className="w-full mt-1 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-400 outline-none"
      />
      {formik.touched[props.name] && formik.errors[props.name] && (
        <p className="text-xs text-red-500 mt-1">
          {formik.errors[props.name]}
        </p>
      )}
    </div>
  );
}

function SocialButton({ label }) {
  return (
    <button
      type="button"
      className="flex-1 border rounded-xl py-3 text-sm font-semibold hover:bg-gray-50 transition"
    >
      {label}
    </button>
  );
}
