const API_PROFILE_AUTH = import.meta.env.VITE_API_PROFILE;
import { useState } from "react";
import axios from "axios";
import { redirect, useLoaderData } from "react-router-dom";
const UserProfile = () => {
  let user = useLoaderData();
  console.log(user || "guest");

  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center py-16">
      <h4> username {user?.ussername || "guest"}</h4>
    </section>
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
