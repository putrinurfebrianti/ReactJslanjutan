import API from "../_api";

export const getBooks = async () => {
  const { data } = await API.get("/books");
  return data.data || data;
};

export const showBook = async (id) => {
  const { data } = await API.get(`/books/${id}`);
  return data.data;
};

export const createBook = async (data) => {
  const response = await API.post("/books", data);
  return response.data;
};

export const updateBook = async (id, data) => {
  const response = await API.put(`/books/${id}`, data);
  return response.data;
};

export const deleteBook = async (id) => {
  await API.delete(`/books/${id}`);
};
