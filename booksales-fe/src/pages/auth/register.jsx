import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    username: "",
    password: ""
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullname || !formData.email || !formData.username || !formData.password) {
      setError("Semua field harus diisi!");
      return;
    }
    if (!validateEmail(formData.email)) {
      setError("Format email tidak valid!");
      return;
    }

    localStorage.setItem("userInfo", JSON.stringify(formData));
    alert("Registrasi berhasil! Silakan login.");
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-pink-50">
      <div className="bg-white border-2 border-pink-300 rounded-2xl shadow-md p-8 w-96">
        <h2 className="text-2xl font-bold text-pink-700 mb-6 text-center">Create an Account</h2>

        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium text-pink-700 mb-1">Full Name</label>
            <input
              type="text"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              className="w-full border border-pink-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-pink-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-pink-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-pink-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-pink-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-pink-700 mb-1">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full border border-pink-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-pink-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-pink-700 mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-pink-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-pink-400 outline-none"
            />
          </div>

          <button
            type="submit"
            className="bg-pink-500 text-white font-semibold rounded-lg py-2 mt-2 hover:bg-pink-600 transition-all"
          >
            Sign up
          </button>

          <p className="text-center text-sm text-gray-600 mt-2">
            Already have an account?{" "}
            <Link to="/login" className="text-pink-600 font-semibold hover:underline">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
