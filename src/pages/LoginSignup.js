import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";

const LoginSignup = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleToggle = () => setIsSignUp(!isSignUp);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="relative w-[900px] h-[500px] flex overflow-hidden rounded-lg shadow-lg">
        {/* Left Panel */}
        <div
          className={`absolute top-0 left-0 h-full w-1/2 bg-gradient-to-br ${
            isSignUp ? "translate-x-full" : ""
          } from-red-500 to-pink-500 text-white transition-transform duration-500 ease-in-out flex flex-col items-center justify-center`}
        >
          <h2 className="text-3xl font-bold mb-4">
            {isSignUp ? "Welcome Back!" : "Hello, Friend!"}
          </h2>
          <p className="mb-6 text-center">
            {isSignUp
              ? "To keep connected, please login with your personal info"
              : "Enter your personal details and start your journey with us"}
          </p>
          <button
            className="bg-white text-red-500 px-6 py-2 rounded-full font-semibold"
            onClick={handleToggle}
          >
            {isSignUp ? "SIGN IN" : "SIGN UP"}
          </button>
        </div>

        {/* Right Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-1/2 bg-white text-gray-700 transition-transform duration-500 ease-in-out ${
            isSignUp ? "-translate-x-full" : ""
          } flex flex-col items-center justify-center`}
        >
          <h2 className="text-3xl font-bold mb-4">
            {isSignUp ? "Create Account" : "Sign In"}
          </h2>
          {isSignUp ? <SignUpForm /> : <LoginForm />}
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
