import { useState, useMemo } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Mail, Lock, User, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

const API_BASE_URL = "http://localhost:2025/auth";

export default function AuthForm({ isLogin, onSignupSuccess }) {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // ✅ DYNAMIC VALIDATION SCHEMA (IMPORTANT)
  const validationSchema = useMemo(
    () =>
      Yup.object({
        name: isLogin
          ? Yup.string()
          : Yup.string().required("Full name is required"),
        email: Yup.string()
          .email("Invalid email address")
          .required("Email is required"),
        password: Yup.string()
          .min(6, "Minimum 6 characters")
          .required("Password is required"),
      }),
    [isLogin]
  );

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema,
    validateOnBlur: true,
    validateOnChange: true,

    onSubmit: async (values, { resetForm }) => {
      try {
        const url = isLogin
          ? `${API_BASE_URL}/login`
          : `${API_BASE_URL}/signup`;

        const payload = isLogin
          ? { email: values.email, password: values.password }
          : values;

        const res = await axios.post(url, payload);

        // ✅ SIGNUP SUCCESS → SWITCH TO LOGIN
        if (!isLogin) {
          resetForm();
          alert("Signup successful. Please login.");

          onSignupSuccess(); // 🔥 SWITCH FORM
          return;
        }

        // ✅ LOGIN SUCCESS
        const { token, user } = res.data;

        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));

        const cartKey = `cart_${user.id}`;
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
    <form onSubmit={formik.handleSubmit} className="space-y-6">
      {/* FULL NAME */}
      {!isLogin && (
        <div>
          <label className="text-sm font-medium">Full Name</label>
          <div className="relative mt-2">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              name="name"
              type="text"
              placeholder="Enter your full name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full pl-12 pr-4 py-4 rounded-xl border"
            />
          </div>
          {formik.touched.name && formik.errors.name && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
          )}
        </div>
      )}

      {/* EMAIL */}
      <div>
        <label className="text-sm font-medium">Email Address</label>
        <div className="relative mt-2">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            name="email"
            type="email"
            placeholder="you@example.com"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full pl-12 pr-4 py-4 rounded-xl border"
          />
        </div>
        {formik.touched.email && formik.errors.email && (
          <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
        )}
      </div>

      {/* PASSWORD */}
      <div>
        <label className="text-sm font-medium">Password</label>
        <div className="relative mt-2">
          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="••••••••"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full pl-12 pr-12 py-4 rounded-xl border"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2"
          >
            {showPassword ? <EyeOff /> : <Eye />}
          </button>
        </div>
        {formik.touched.password && formik.errors.password && (
          <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-red-600 text-white py-4 rounded-full font-semibold"
      >
        {isLogin ? "Login to Your Account" : "Create Your Account"}
      </button>
    </form>
  );
}
