import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <Link
          to="#"
          className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-pink-700 bg-pink-100 rounded-full hover:bg-pink-200"
          role="alert"
        >
          <span className="text-xs bg-pink-600 rounded-full text-white px-4 py-1.5 mr-3">
            New
          </span>
          <span className="text-sm font-medium">BookSales is out! See what's new</span>
          <svg
            className="ml-2 w-5 h-5 text-pink-600"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </Link>

        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-pink-700 md:text-5xl lg:text-6xl">
          Temukan Buku Favoritmu di BookSales
        </h1>

        <p className="mb-8 text-lg font-normal text-pink-500 lg:text-xl sm:px-16 xl:px-48">
          Jelajahi ribuan buku dari berbagai genre dan penulis. Kami menghadirkan
          koleksi terbaik untuk menemani waktu membaca Anda.
        </p>

        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <Link
            to="/books"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-pink-300"
          >
            Jelajahi Buku
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
          <Link
            to="/register"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-pink-700 border border-pink-300 rounded-lg hover:bg-pink-100 focus:ring-4 focus:ring-pink-200"
          >
            Bergabung Sekarang
          </Link>
        </div>

        <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36 mt-12">
          <span className="font-semibold text-pink-400 uppercase">FEATURED IN</span>
          <div className="flex flex-wrap justify-center items-center mt-8 text-pink-400 sm:justify-between">
            <Link to="#" className="mr-5 mb-5 lg:mb-0 hover:text-pink-600">
              <svg
                className="h-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 640 512"
              >
                <path d="M...Z" /> 
              </svg>
            </Link>
            <Link to="#" className="mr-5 mb-5 lg:mb-0 hover:text-pink-600">
              <svg
                className="h-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 640 512"
              >
                <path d="M...Z" /> 
              </svg>
            </Link>
            <Link to="#" className="mr-5 mb-5 lg:mb-0 hover:text-pink-600">
              <svg
                className="h-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 640 512"
              >
                <path d="M...Z" /> 
              </svg>
            </Link>
            <Link to="#" className="mr-5 mb-5 lg:mb-0 hover:text-pink-600">
              <svg
                className="h-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 640 512"
              >
                <path d="M...Z" /> 
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
