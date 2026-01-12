const API_PROFILE_AUTH = import.meta.env.VITE_API_PROFILE;
import { useState } from "react";
import axios from "axios";
import { redirect, useLoaderData, useNavigation } from "react-router-dom";
import { Heading4 } from "lucide-react";
const UserProfile = () => {
  let RouteState = useNavigation();
  let isLoading = RouteState.state === "loading";

  let user = useLoaderData();

  return (
    <>
      {isLoading ? (
        "loading........"
      ) : (
        <div className="min-h-screen bg-gray-100">
          {/* Top Header */}
          <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-6 py-4">
              <h1 className="text-2xl font-semibold text-gray-800">
                Hellow {user && user?.username} welcome back
              </h1>
              <p className="text-sm text-gray-500">
                Manage your account information
              </p>
            </div>
          </header>

          {/* Main Content */}
          <main className="max-w-7xl mx-auto px-6 py-10">
            <div className="bg-white rounded-2xl shadow-md p-8 max-w-2xl">
              <form className="space-y-6">
                {/* Username */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Username
                  </label>
                  <input
                    value={user && user?.username}
                    type="text"
                    placeholder="Enter username"
                    className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2
                           focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    value={user && user?.email}
                    type="email"
                    placeholder="Enter email"
                    className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2
                           focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <input
                    value={user && user?.password}
                    type="password"
                    placeholder="Enter password"
                    className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2
                           focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                {/* Action */}
                <div className="pt-4">
                  <button
                    type="button"
                    className="bg-indigo-600 text-white px-6 py-2 rounded-lg
                           hover:bg-indigo-700 transition"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </main>
        </div>
      )}
    </>
  );
};

export async function ProfileLoader() {
  try {
    let res = await axios.get(API_PROFILE_AUTH, { withCredentials: true });

    return res.data;
  } catch (er) {
    return redirect("/auth/login");
  }
}
export default UserProfile;
