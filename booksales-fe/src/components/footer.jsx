import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="border-t-2 border-pink-200 p-6 bg-pink-50 md:p-10 lg:p-12">
        <div className="mx-auto max-w-screen-xl text-center">
          <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-700">
            <li>
              <Link
                to={"#"}
                className="mr-4 hover:text-pink-600 hover:underline md:mr-6 transition duration-200"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to={"#"}
                className="mr-4 hover:text-pink-600 hover:underline md:mr-6 transition duration-200"
              >
                Premium
              </Link>
            </li>
            <li>
              <Link
                to={"#"}
                className="mr-4 hover:text-pink-600 hover:underline md:mr-6 transition duration-200"
              >
                Campaigns
              </Link>
            </li>
            <li>
              <Link
                to={"#"}
                className="mr-4 hover:text-pink-600 hover:underline md:mr-6 transition duration-200"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to={"#"}
                className="mr-4 hover:text-pink-600 hover:underline md:mr-6 transition duration-200"
              >
                Affiliate Program
              </Link>
            </li>
            <li>
              <Link
                to={"#"}
                className="mr-4 hover:text-pink-600 hover:underline md:mr-6 transition duration-200"
              >
                FAQs
              </Link>
            </li>
            <li>
              <Link
                to={"#"}
                className="mr-4 hover:text-pink-600 hover:underline md:mr-6 transition duration-200"
              >
                Contact
              </Link>
            </li>
          </ul>

          <span className="text-sm text-gray-500 sm:text-center">
            ©{" "}
            <Link
              to={"#"}
              className="hover:text-pink-600 hover:underline font-semibold transition duration-200"
            >
              2025
            </Link>{" "}
            . All Rights Reserved.
          </span>

          <div className="mt-4">
            <p className="text-xs text-gray-400">
              Putri Nur Febrianti
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
