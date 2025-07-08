// components/AuthModal.jsx
import { useState } from "react";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

export default function AuthModal({ onClose }) {
  const [isSignup, setIsSignup] = useState(true);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-sm p-6 rounded-lg shadow-lg relative">
        <button onClick={onClose} className="absolute top-2 right-3 text-gray-500 hover:text-black">✕</button>
        {isSignup ? (
          <SignupForm switchToLogin={() => setIsSignup(false)} />
        ) : (
          <LoginForm switchToSignup={() => setIsSignup(true)} />
        )}
      </div>
    </div>
  );
}
