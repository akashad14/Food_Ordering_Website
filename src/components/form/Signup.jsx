
import { useState } from "react";
import { ChefHat } from "lucide-react";
import AuthForm from "./AuthForm";

export default function Signup() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <main className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/signup.png')" }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative w-full max-w-lg z-10">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-3 mb-12">
            <div className="flex justify-center mb-4">
              <div className="bg-orange-500 rounded-full p-3">
                <ChefHat className="w-8 h-8 text-white" />
              </div>
            </div>

            <h1 className="text-5xl font-bold text-white drop-shadow-lg">
              {isLogin ? "Welcome Back" : "Join Macka Food"}
            </h1>

            <p className="text-lg text-white/90 drop-shadow-md">
              {isLogin
                ? "Fast delivery. Fresh food. Happy you."
                : "Get delicious food delivered in minutes"}
            </p>
          </div>

          {/* Toggle */}
          <div className="flex gap-3 bg-white/10 backdrop-blur-md rounded-2xl p-1.5 border border-white/20">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-3 rounded-xl font-semibold transition-all ${
                isLogin
                  ? "bg-orange-500 text-white shadow-lg"
                  : "text-white/70 hover:text-white"
              }`}
            >
              Login
            </button>

            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-3 rounded-xl font-semibold transition-all ${
                !isLogin
                  ? "bg-orange-500 text-white shadow-lg"
                  : "text-white/70 hover:text-white"
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Auth Form */}
          <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 md:p-10 shadow-2xl border border-white/30">
            <AuthForm
              isLogin={isLogin}
              onSignupSuccess={() => setIsLogin(true)}
            />
          </div>

          {/* Footer */}
          <p className="text-center text-sm text-white/80">
            By continuing, you agree to our{" "}
            <button className="text-orange-300 font-semibold hover:underline">
              Terms of Service
            </button>{" "}
            and{" "}
            <button className="text-orange-300 font-semibold hover:underline">
              Privacy Policy
            </button>
          </p>
        </div>
      </div>
    </main>
  );
}
