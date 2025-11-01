import { Link, Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDecodeToken } from "../_services/auth";
import {
  LayoutDashboard,
  Users,
  UserSquare2,
  BookOpen,
  Library,
  LockKeyhole,
  HelpCircle,
  LogOut,
} from "lucide-react";

export default function AdminLayout() {
  const navigate = useNavigate();
  const token = localStorage.getItem("accessToken");
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const decodedData = useDecodeToken(token);

  const [dropdownOpen, setDropdownOpen] = useState(false);


  useEffect(() => {
    if (!token || !decodedData || !decodedData.success) {
      navigate("/login");
      return;
    }

    const role = userInfo?.role;
    if (role !== "admin" || !role) {
      navigate("/");
    }
   
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userInfo");
    navigate("/login");
  };

  return (
    <div className="antialiased bg-pink-50 dark:bg-gray-900">
      <nav className="bg-white border-b border-gray-200 px-4 py-2.5 fixed left-0 right-0 top-0 z-50 shadow-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <button
              data-drawer-target="drawer-navigation"
              data-drawer-toggle="drawer-navigation"
              aria-controls="drawer-navigation"
              className="p-2 mr-2 text-gray-600 rounded-lg cursor-pointer md:hidden hover:text-gray-900 hover:bg-pink-100 focus:ring-2 focus:ring-pink-200"
            >
              <svg
                aria-hidden="true"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 
                  0 011-1h6a1 1 0 110 2H4a1 1 
                  0 01-1-1zM3 15a1 1 0 
                  011-1h12a1 1 0 110 2H4a1 1 
                  0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>

            <Link to="/admin" className="flex items-center space-x-2">
              <img
                src="https://flowbite.s3.amazonaws.com/logo.svg"
                className="h-8"
                alt="Booksales Logo"
              />
              <span className="text-2xl font-bold text-pink-600">Booksales</span>
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-pink-100 text-pink-700 font-medium px-3 py-1 rounded-full text-sm shadow-sm">
              Admin
            </div>

            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                type="button"
                className="flex mx-3 text-sm bg-pink-200 rounded-full focus:ring-4 focus:ring-pink-100"
              >
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  alt="user"
                />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-pink-100">
                  <div className="px-4 py-3 text-sm text-gray-900">
                    <div>{userInfo?.name || "Admin"}</div>
                    <div className="font-medium truncate text-gray-500">
                      {userInfo?.email || "admin@example.com"}
                    </div>
                  </div>
                  <ul className="py-1 text-sm text-gray-700">
                    <li>
                      <Link
                        to="#"
                        className="block px-4 py-2 hover:bg-pink-100 text-gray-700"
                      >
                        Profile
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 hover:bg-pink-100 text-gray-700"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      <aside
        id="drawer-navigation"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform -translate-x-full 
        bg-white border-r border-pink-100 md:translate-x-0 shadow-sm"
        aria-label="Sidebar"
      >
        <div className="overflow-y-auto py-5 px-3 h-full bg-white">
          <ul className="space-y-2 font-medium text-gray-700">
            <li>
              <Link
                to="/admin"
                className="flex items-center p-2 rounded-lg hover:bg-pink-100 text-gray-800"
              >
                <LayoutDashboard className="w-5 h-5 text-pink-500" />
                <span className="ml-3">Overview</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/users"
                className="flex items-center p-2 rounded-lg hover:bg-pink-100 text-gray-800"
              >
                <Users className="w-5 h-5 text-pink-500" />
                <span className="ml-3">Users</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/authors"
                className="flex items-center p-2 rounded-lg hover:bg-pink-100 text-gray-800"
              >
                <UserSquare2 className="w-5 h-5 text-pink-500" />
                <span className="ml-3">Authors</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/genres"
                className="flex items-center p-2 rounded-lg hover:bg-pink-100 text-gray-800"
              >
                <BookOpen className="w-5 h-5 text-pink-500" />
                <span className="ml-3">Genres</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/books"
                className="flex items-center p-2 rounded-lg hover:bg-pink-100 text-gray-800"
              >
                <Library className="w-5 h-5 text-pink-500" />
                <span className="ml-3">Books</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/transactions"
                className="flex items-center p-2 rounded-lg hover:bg-pink-100 text-gray-800"
              >
                <LockKeyhole className="w-5 h-5 text-pink-500" />
                <span className="ml-3">Transaction</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/help"
                className="flex items-center p-2 rounded-lg hover:bg-pink-100 text-gray-800"
              >
                <HelpCircle className="w-5 h-5 text-pink-500" />
                <span className="ml-3">Help</span>
              </Link>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="flex items-center w-full p-2 rounded-lg hover:bg-pink-100 text-gray-800"
              >
                <LogOut className="w-5 h-5 text-pink-500" />
                <span className="ml-3">Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </aside>

      <main className="p-4 md:ml-64 pt-20 min-h-screen bg-pink-50">
        <div className="border-2 border-dashed border-pink-200 rounded-lg bg-white shadow-sm px-4 pt-4 pb-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
