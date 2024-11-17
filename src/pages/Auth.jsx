import React, { useState } from "react";

const AuthForm = () => {
  const [isSignUpActive, setIsSignUpActive] = useState(false);

  // State variables for inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [rePassword, setRePassword] = useState("");

  const handleSignUp = () => {
    if (!userName || !email || !password || !rePassword) {
      alert ("You must fill all fields for signup!");
      return;
    }
    if (password !== rePassword) {
      alert("Passwords do not match!");
      return;
    }
    alert("Sign Up Successful!");
    // Add additional logic for signup submission
  };

  const handleSignIn = () => {
    if (!email || !password) {
      alert("You must fill all fields for login!");
      return;
    }
    alert("Sign In Successful!");
    // Add additional logic for login submission
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 font-montserrat">
      <div
        className={`relative overflow-hidden w-full max-w-3xl bg-white rounded-lg shadow-md min-h-[480px] transform ${
          isSignUpActive ? "right-panel-active" : ""
        }`}
      >
        {/* Sign-Up Form */}
        <div
          className={`absolute top-0 left-0 h-full w-1/2 transition-all duration-500 ${
            isSignUpActive
              ? "translate-x-full opacity-100 z-10"
              : "opacity-0 z-0"
          }`}
        >
          <form
            className="flex flex-col items-center justify-center h-full px-12 bg-white text-center"
            onSubmit={(e) => e.preventDefault()} // Prevent default form submission
          >
            <h1 className="font-bold text-2xl mb-4">Create Account</h1>
            <span className="text-s text-gray-500 mb-4">Please fill all fields</span>
            <input
              type="text"
              placeholder="Username"
              className="w-full bg-gray-200 rounded-md px-3 py-2 mb-3 outline-none"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-gray-200 rounded-md px-3 py-2 mb-3 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full bg-gray-200 rounded-md px-3 py-2 mb-3 outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Rewrite password"
              className="w-full bg-gray-200 rounded-md px-3 py-2 mb-3 outline-none"
              value={rePassword}
              onChange={(e) => setRePassword(e.target.value)}
            />
            <button
              type="button"
              className="bg-red-500 text-white font-bold rounded-full px-6 py-2 uppercase text-sm"
              onClick={handleSignUp}
            >
              Sign Up
            </button>
          </form>
        </div>

        {/* Sign-In Form */}
        <div
          className={`absolute top-0 left-0 h-full w-1/2 transition-all duration-500 ${
            isSignUpActive
              ? "translate-x-full opacity-0 z-0"
              : "opacity-100 z-10"
          }`}
        >
          <form
            className="flex flex-col items-center justify-center h-full px-12 bg-white text-center"
            onSubmit={(e) => e.preventDefault()} // Prevent default form submission
          >
            <h1 className="font-bold text-2xl mb-4">Sign in</h1>

            <input
              type="email"
              placeholder="Email"
              className="w-full bg-gray-200 rounded-md px-3 py-2 mb-2 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full bg-gray-200 rounded-md px-3 py-2 mb-4 outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <a href="#" className="text-sm text-gray-600 mb-4">
              Forgot your password?
            </a>
            <button
              type="button"
              className="bg-red-500 text-white font-bold rounded-full px-6 py-2 uppercase text-sm"
              onClick={handleSignIn}
            >
              Sign In
            </button>
          </form>
        </div>

        {/* Overlay */}
        <div
          className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-transform duration-500 bg-gradient-to-r from-red-500 to-pink-500 text-white ${
            isSignUpActive ? "-translate-x-full" : ""
          }`}
        >
          <div className="absolute flex flex-col items-center justify-center h-full w-full text-center px-10">
            <h1 className="font-bold text-2xl mb-4">
              {isSignUpActive ? "Welcome Back!" : "Hello, Friend!"}
            </h1>
            <p className="text-sm mb-6">
              {isSignUpActive
                ? "To keep connected with us please login with your personal info"
                : "Enter your personal details and start your journey with us"}
            </p>
            <button
              type="button"
              onClick={() => setIsSignUpActive(!isSignUpActive)}
              className="border border-white rounded-full px-6 py-2 uppercase text-sm font-bold"
            >
              {isSignUpActive ? "Sign In" : "Sign Up"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
