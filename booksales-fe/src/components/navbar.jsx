import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("accessToken");
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userInfo");
    navigate("/login");
  };

  return (
    <header>
      <nav className="bg-pink-100 border-pink-200 px-4 lg:px-6 py-2.5 shadow-sm">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-pink-700">
              BookSales
            </span>
          </Link>

          <div className="flex items-center lg:order-2">
            {!token ? (
              <>
                <Link
                  to="/login"
                  className="text-pink-700 hover:bg-pink-200 font-medium rounded-lg text-sm px-4 py-2 mr-2 transition-colors"
                >
                  Masuk
                </Link>
                <Link
                  to="/register"
                  className="text-white bg-pink-600 hover:bg-pink-700 font-medium rounded-lg text-sm px-4 py-2 mr-2 transition-colors"
                >
                  Bergabung
                </Link>
              </>
            ) : (
              <>
                {userInfo?.role === "admin" && (
                  <Link
                    to="/admin"
                    className="text-pink-700 hover:underline font-medium text-sm mr-4"
                  >
                    Dashboard Admin
                  </Link>
                )}
                <span className="text-pink-700 mr-4 text-sm">
                  Halo, {userInfo?.name || "User"}
                </span>
                <button
                  onClick={handleLogout}
                  className="text-white bg-red-600 hover:bg-red-700 font-medium rounded-lg text-sm px-4 py-2"
                >
                  Logout
                </button>
              </>
            )}
          </div>

          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link
                  to="/"
                  className="block py-2 pr-4 pl-3 text-pink-700 lg:p-0"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/books"
                  className="block py-2 pr-4 pl-3 text-pink-600 hover:text-pink-700 lg:p-0"
                >
                  Buku Terlaris
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="block py-2 pr-4 pl-3 text-pink-600 hover:text-pink-700 lg:p-0"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="block py-2 pr-4 pl-3 text-pink-600 hover:text-pink-700 lg:p-0"
                >
                  Layanan
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
