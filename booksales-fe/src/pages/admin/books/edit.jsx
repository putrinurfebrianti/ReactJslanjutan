import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { showBook, updateBook } from "../../../_services/books";

export default function EditBook() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState({
    title: "",
    price: "",
    stock: "",
    cover: "",
  });

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const data = await showBook(id);
        setBook({
          title: data.title,
          price: data.price,
          stock: data.stock,
          cover: data.cover,
        });
      } catch (error) {
        console.error("Error fetching book:", error);
      }
    };
    fetchBook();
  }, [id]);

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateBook(id, book);
      alert("Book updated successfully!");
      navigate("/admin/books");
    } catch (error) {
      console.error("Error updating book:", error);
      alert("Failed to update book");
    }
  };

  return (
    <section className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
          Edit Book
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Title</label>
            <input
              type="text"
              name="title"
              value={book.title}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Price</label>
            <input
              type="number"
              name="price"
              value={book.price}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Stock</label>
            <input
              type="number"
              name="stock"
              value={book.stock}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Cover URL</label>
            <input
              type="text"
              name="cover"
              value={book.cover}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Update Book
          </button>
        </form>
      </div>
    </section>
  );
}
