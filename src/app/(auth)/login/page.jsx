"use client";

import { useState } from "react";
import { X, Phone } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { redirect } from "next/navigation";

export default function SignUp() {
  const [email, setEmail] = useState("");

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-3xl border border-gray-300 my-10 overflow-hidden">
        <div className="p-6 space-y-6">
          <h1 className="text-2xl font-bold">Login</h1>

          <div className="space-y-3">
            <button className="flex items-center justify-center w-full py-3 px-4 border border-gray-300 rounded-full cursor-pointer hover:bg-gray-50 duration-300">
              <FcGoogle className="w-5 h-5 mr-3" />
              <span>Continue with Google</span>
            </button>

            <button className="flex items-center justify-center w-full py-3 px-4 border border-gray-300  rounded-full cursor-pointer hover:bg-gray-50 duration-300">
              <FaFacebook className="w-5 h-5 mr-3 text-blue-500" />
              <span>Continue with Facebook</span>
            </button>

            <button className="flex items-center justify-center w-full py-3 px-4 border border-gray-300 rounded-full cursor-pointer hover:bg-gray-50 duration-300">
              <FiPhone className="w-5 h-5 mr-3" />
              <span>Continue with Phone</span>
            </button>
          </div>

          <div className="flex items-center">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="px-3 text-gray-500 text-sm">or</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          <div className="space-y-3">
            <p className="text-sm">Enter your email to get started.</p>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <p className="text-sm">
            By continuing, you agree to our{" "}
            <a href="#" className="text-blue-600">
              Terms of Service
            </a>
            ,{" "}
            <a href="#" className="text-blue-600">
              Privacy Policy
            </a>
            .
          </p>

          {/* Continue button */}
          <button
            onClick={() => {
              redirect("/dashboard");
            }}
            className="w-full py-3 bg-secondary cursor-pointer text-white rounded-lg hover:bg-primary transition-colors"
          >
            Continue
          </button>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 p-6 text-center">
          <p className="text-sm">
            Don't have an account?
            <a href="#" className="text-sky-500">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
