import { useState } from "react";
import { Dumbbell} from "lucide-react";
import fitnessImage from "../assets/fitconnect-hero-collage.png";
import fitconnectIcon from "../assets/fitconnect-logo.svg";
import useLogin from "../services/LoginUser";
import { Link } from "react-router-dom";

export default function FitConnectLogin() {
  const { username, setUsername, password, setPassword, message, handleClick } =
    useLogin();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Logo top-left */}
      <header className="px-6 pt-6 flex items-center gap-2">
    <img src={fitconnectIcon} alt="FitConnect" className="h-8" />
    
    </header>

      {/* Main content: left image, right login/register */}
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-4xl flex items-center justify-center gap-20">
          {/* Left column - hero image + text */}
          <div className="hidden md:flex flex-col items-center w-1/2 max-w-sm">
           <h1 className="text-3xl font-light text-center leading-snug mb-6">
              Track your progress,{" "}
              <span className="text-orange-500 font-medium">connect</span> with
              your fitness community.
            </h1>
            <img
              src={fitnessImage}
              alt="Instagram preview"
              className="w-full max-w-xs"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
          </div>
            <div className="hidden md:block w-px self-stretch bg-gray-300" />


          {/* Right column - Login / Register */}
          <div className="w-full max-w-sm flex flex-col gap-3">
            <div className="border border-gray-300 rounded-sm px-10 py-10 flex flex-col items-center bg-white">
              <h2 className="text-sm font-semibold text-gray-800 self-start mb-4">
                Log into fit<span className="text-orange-500 font-medium">Connect</span>
              </h2>

              <form className="w-full flex flex-col gap-2" onSubmit={handleClick}>
                <input
                  type="text"
                  placeholder="Mobile number, username or email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-sm bg-gray-50 focus:outline-none focus:border-gray-400 placeholder-gray-500"
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-sm bg-gray-50 focus:outline-none focus:border-gray-400 placeholder-gray-500"
                />

                <button 
                  type="submit"
                  className="w-full mt-2 bg-orange-500 hover:bg-orange-600 transition-colors text-white text-sm font-semibold py-2 rounded-lg"
                >
                  Log in
                </button>
                {message && (
                  <p className="text-xs text-center text-red-500 mt-1">
                    {message}
                  </p>
                )}

                <div className="flex items-center gap-4 my-2">
                  <div className="flex-1 h-px bg-gray-300" />
                  <span className="text-xs font-semibold text-gray-400">OR</span>
                  <div className="flex-1 h-px bg-gray-300" />
                </div>

            <button
          type="button"
          className="flex items-center justify-center gap-2 text-sm font-semibold text-gray-700 border border-gray-300 rounded-lg py-2 w-full hover:bg-gray-50 transition-colors"
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4">
            <path fill="#4285F4" d="M23.52 12.27c0-.79-.07-1.54-.2-2.27H12v4.3h6.47c-.28 1.5-1.13 2.77-2.4 3.62v3h3.88c2.27-2.09 3.57-5.17 3.57-8.65z"/>
            <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.92l-3.88-3c-1.08.72-2.45 1.15-4.05 1.15-3.11 0-5.75-2.1-6.69-4.93H1.3v3.09C3.26 21.3 7.31 24 12 24z"/>
            <path fill="#FBBC05" d="M5.31 14.3a7.2 7.2 0 0 1 0-4.6V6.61H1.3a12 12 0 0 0 0 10.78z"/>
            <path fill="#EA4335" d="M12 4.77c1.77 0 3.35.61 4.6 1.8l3.44-3.44C17.94 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.3 6.61l4.01 3.09C6.25 6.87 8.89 4.77 12 4.77z"/>
          </svg>
          Log in with Google
          </button>

                <a href="#" className="text-xs text-blue-900 text-center mt-3">
                  Forgot password?
                </a>
              </form>
            </div>

            <div className="border border-gray-300 rounded-sm py-4 flex items-center justify-center bg-white">
              <p className="text-sm">
                Don't have an account?{" "}
              <Link to="/register" className="text-orange-500 font-semibold">
                              Sign up
                            </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    <div className="w-full max-w-3xl mx-auto h-px bg-gray-300 mt-8" />

      {/* Footer */}
      <footer className="mt-8 pb-8">
        <div className="max-w-3xl mx-auto px-4">
          <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs text-gray-500 mb-4">
            {[
              "About",
              "Blog",
              "Help",
              "Privacy",
              "Terms",
              "Locations",
              "Contact Uploading & Non-Users",
            ].map((item) => (
              <a key={item} href="#" className="hover:underline">
                {item}
              </a>
            ))}
          </nav>
          <div className="flex flex-col items-center gap-2 text-xs text-gray-500">
            <select className="bg-transparent text-xs text-gray-500 border-none focus:outline-none">
              <option>English</option>
              <option>Hindi</option>
              <option>Spanish</option>
            </select>
            <p>© 2026 FitConnect</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
