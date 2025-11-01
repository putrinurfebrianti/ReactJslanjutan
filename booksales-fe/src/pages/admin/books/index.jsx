import { useEffect, useState } from "react";
import { deleteBook, getBooks } from "../../../_services/books";
import { getGenres } from "../../../_services/genres";
import { getAuthors } from "../../../_services/authors";
import { Link, useNavigate } from "react-router-dom";

export default function AdminBooks() {
  const [books, setBooks] = useState([]);
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const [booksData] = await Promise.all([
        getBooks(),
        getGenres(),
        getAuthors(),
      ]);
      setBooks(booksData);

    };
    fetchData();
  }, []);

  const toggleDropdown = (id) => {
    setOpenDropdownId(openDropdownId === id ? null : id);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this book?");
    if (confirmDelete) {
      await deleteBook(id);
      setBooks(books.filter((book) => book.id !== id));
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
      <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between p-4">
          <div className="w-full md:w-1/2">
            <form className="flex items-center">
              <label htmlFor="simple-search" className="sr-only">Search</label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 
                    4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </div>
                <input
                  type="text"
                  id="simple-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="Search"
                />
              </div>
            </form>
          </div>
          <Link
            to={"/admin/books/create"}
            className="flex items-center justify-center text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-indigo-600 dark:hover:bg-indigo-700"
          >
            <svg className="h-3.5 w-3.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path clipRule="evenodd" fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 
              1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 
              110-2h5V4a1 1 0 011-1z" />
            </svg>
            Add product
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-4 py-3">Title</th>
                <th className="px-4 py-3">Price</th>
                <th className="px-4 py-3">Stock</th>
                <th className="px-4 py-3">Cover</th>
                <th className="px-4 py-3">Genre</th>
                <th className="px-4 py-3">Author</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {books.length > 0 ? (
                books.map((book) => (
                  <tr key={book.id} className="border-b dark:border-gray-700">
                    <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">{book.title}</td>
                    <td className="px-4 py-3">{book.price}</td>
                    <td className="px-4 py-3">{book.stock}</td>
                    <td className="px-4 py-3 truncate max-w-xs">{book.cover_photo}</td>
                    <td className="px-4 py-3">
                      {book.genre ? book.genre.name : "Unknown Genre"}
                    </td>
                    <td className="px-4 py-3">
                      {book.author ? book.author.name : "Unknown Author"}
                    </td>
                    <td className="px-4 py-3 flex justify-end relative">
                      <button
                        onClick={() => toggleDropdown(book.id)}
                        className="text-gray-500 hover:text-gray-800 dark:text-gray-400"
                      >
                        ⋮
                      </button>
                      {openDropdownId === book.id && (
                        <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-700 rounded-lg shadow-lg z-10">
                          <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
                            <li>
                              <button
                                onClick={() => navigate(`/admin/books/edit/${book.id}`)}
                                className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                              >
                                Edit
                              </button>
                            </li>
                            <li>
                              <button
                                onClick={() => handleDelete(book.id)}
                                className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600"
                              >
                                Delete
                              </button>
                            </li>
                          </ul>
                        </div>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="px-4 py-3" colSpan="7">No Data Found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
