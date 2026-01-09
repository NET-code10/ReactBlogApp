const API_PROFILE_AUTH = import.meta.env.VITE_API_PROFILE;
import { useState } from "react";
import axios from "axios";
import { redirect } from "react-router-dom";
const UserProfile = () => {
  const [user, setUser] = useState({
    username: "lokeshdev",
    email: "lokesh@example.com",
    password: "password123",
    avatar: "https://i.pravatar.cc/150?img=12",
  });

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Create a temporary URL to show the uploaded image
      setUser({ ...user, avatar: URL.createObjectURL(file) });
    }
  };

  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center py-16">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          User Profile
        </h2>

        {/* Avatar */}
        <div className="flex flex-col items-center mb-6">
          <img
            src={user.avatar}
            alt="User Avatar"
            className="w-28 h-28 rounded-full object-cover border"
          />
          <label className="mt-3 cursor-pointer text-indigo-600 hover:text-indigo-800">
            Change Avatar
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleAvatarChange}
            />
          </label>
        </div>

        {/* Username */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">
            Username
          </label>
          <input
            type="text"
            value={user.username}
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            readOnly
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Email</label>
          <input
            type="email"
            value={user.email}
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            readOnly
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">
            Password
          </label>
          <input
            type="password"
            value={user.password}
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            readOnly
          />
        </div>
      </div>
    </section>
  );
};
export async function ProfileLoader() {
  try {
    let res = await axios.get(API_PROFILE_AUTH, { withCredentials: true });
    console.log(res.data);

    return res.data;
    
  } catch (er) {
    return redirect("/auth/login");
  }
}
export default UserProfile;
