const API_REGISTER = import.meta.env.VITE_API_REGIESTER;
const API_LOGIN = import.meta.env.VITE_API_LOGIN;

import React from "react";
import { Link, Form } from "react-router-dom";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  LogIn,
  UserPlus,
  Shield,
} from "lucide-react";
import axios from "axios";

const AuthContainer = ({ children, title, subtitle }) => (
  <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md mx-auto">
      <div className="text-center mb-12">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
            <Shield className="w-8 h-8 text-white" />
          </div>
        </div>
        <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
        <p className="mt-3 text-gray-600">{subtitle}</p>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-8">
        {children}
      </div>
    </div>
  </div>
);

// Signup Component
export const Signup = () => (
  <AuthContainer
    title="Create Your Account"
    subtitle="Join our community of bloggers"
  >
    <Form method="post" className="space-y-6">
      <div className="flex items-center border border-gray-200 rounded-xl px-4 py-3 bg-gray-50">
        <User className="w-5 h-5 text-gray-400 mr-3" />
        <input
          type="text"
          className="w-full bg-transparent focus:outline-none"
          placeholder="Username"
          name="username"
        />
      </div>

      <div className="flex items-center border border-gray-200 rounded-xl px-4 py-3 bg-gray-50">
        <Mail className="w-5 h-5 text-gray-400 mr-3" />
        <input
          type="email"
          className="w-full bg-transparent focus:outline-none"
          placeholder="Email address"
          name="email"
        />
      </div>

      <div className="flex items-center border border-gray-200 rounded-xl px-4 py-3 bg-gray-50">
        <Lock className="w-5 h-5 text-gray-400 mr-3" />
        <input
          type="password"
          className="w-full bg-transparent focus:outline-none"
          placeholder="Password"
          name="password"
        />
        <EyeOff className="w-5 h-5 text-gray-400 cursor-pointer" />
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          className="w-4 h-4 text-blue-600 border-gray-300 rounded"
        />
        <label className="ml-2 text-sm text-gray-600">
          I agree to Terms & Privacy
        </label>
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center px-6 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all"
      >
        Create Account
        <UserPlus className="ml-2 w-5 h-5" />
      </button>
    </Form>

    <div className="mt-8 pt-6 border-t border-gray-100 text-center">
      <p className="text-gray-600">
        Already have an account?{" "}
        <Link
          to="/auth/login"
          className="font-semibold text-blue-600 hover:text-blue-700"
        >
          Sign in
        </Link>
      </p>
    </div>
  </AuthContainer>
);

// Login Component
export const Login = () => (
  <AuthContainer title="Welcome Back" subtitle="Sign in to continue blogging">
    <Form method="post" className="space-y-6">
      <div className="flex items-center border border-gray-200 rounded-xl px-4 py-3 bg-gray-50">
        <Mail className="w-5 h-5 text-gray-400 mr-3" />
        <input
          type="email"
          className="w-full bg-transparent focus:outline-none"
          placeholder="Email address"
          name="email"
        />
      </div>

      <div className="flex items-center border border-gray-200 rounded-xl px-4 py-3 bg-gray-50">
        <Lock className="w-5 h-5 text-gray-400 mr-3" />
        <input
          type="password"
          className="w-full bg-transparent focus:outline-none"
          placeholder="Password"
          name="password"
        />
        <EyeOff className="w-5 h-5 text-gray-400 cursor-pointer" />
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <input
            type="checkbox"
            className="w-4 h-4 text-blue-600 border-gray-300 rounded"
          />
          <label className="ml-2 text-sm text-gray-600">Remember me</label>
        </div>
      </div>

      <button className="w-full flex items-center justify-center px-6 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all">
        Sign In
        <LogIn className="ml-2 w-5 h-5" />
      </button>
    </Form>

    <div className="mt-8 pt-6 border-t border-gray-100 text-center">
      <p className="text-gray-600">
        Don't have an account? <Link to={"/auth/sign-up"}>Sign up</Link>
      </p>
    </div>
  </AuthContainer>
);

export async function singupAction({ request }) {
  const formData = await request.formData();

  const data = Object.fromEntries(formData);
  try {
    let res = await axios.post(API_REGISTER, data, {
      withCredentials: true,
    });
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error.message);
     console.log(error.response);
  }
}
export async function loginAction({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    let res = await axios.post(API_LOGIN, data, {
      withCredentials: true,
    });
    console.log(res.data)
    return res.data;
  } catch (error) {
    console.log(error.message);
    console.log(error.response);
  }
}
