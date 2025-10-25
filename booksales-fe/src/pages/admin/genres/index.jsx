import { useEffect, useState } from "react";
import { getGenres, deleteGenre } from "../../../_services/genres";
import { Link } from "react-router-dom";

export default function AdminGenres() {
  const [genres, setGenres] = useState([]);
  const [openDropdownId, setOpenDropdownId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const genresData = await getGenres();
      setGenres(genresData);
    };
    fetchData();
  }, []);

  const toggleDropdown = (id) => {
    setOpenDropdownId(openDropdownId === id ? null : id);
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
      <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
        <div className="flex justify-between p-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Genres</h3>

          <Link
            to={"/admin/genres/create"}
            className="flex items-center justify-center text-white bg-indigo-700 hover:bg-indigo-800 font-medium rounded-lg text-sm px-4 py-2"
          >
            Add Genre
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs uppercase bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-4 py-3">Genre</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {genres.map((genre) => (
                <tr key={genre.id} className="border-b dark:border-gray-700">
                  <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">
                    {genre.name}
                  </td>

                  <td className="px-4 py-3 flex justify-end relative">
                    <button
                      onClick={() => toggleDropdown(genre.id)}
                      className="text-gray-500 hover:text-gray-800 dark:text-gray-400"
                    >
                      ⋮
                    </button>

                    {openDropdownId === genre.id && (
                      <div className="absolute right-0 z-10 w-32 bg-white dark:bg-gray-700 rounded shadow">
                        <ul className="py-1 text-sm">
                          <li>
                            <Link
                              to={`/admin/genres/edit/${genre.id}`}
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                            >
                              Edit
                            </Link>
                          </li>
                          <li>
                            <button
                              onClick={() => deleteGenre(genre.id)}
                              className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                            >
                              Delete
                            </button>
                          </li>
                        </ul>
                      </div>
                    )}
                  </td>
                </tr>
              ))}

              {genres.length === 0 && (
                <tr>
                  <td className="px-4 py-3">No Data Found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
