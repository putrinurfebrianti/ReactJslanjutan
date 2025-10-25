import API from "../_api";

export const getGenres = async () => {
  const { data } = await API.get("/genres");
  return data.data;
};

export const createGenre = async (data) => {
  try {
    const payload = {
      name: data.name,
      description: data.description ?? ""
    };

    const response = await API.post("/genres", payload);
    return response.data;
  } catch (error) {
    console.error(error.response?.data || error);
    throw error;
  }
};

export const deleteGenre = async (id) => {
  try {
    await API.delete(`/genres/${id}`);
  } catch (error) {
    console.error(error.response?.data || error);
    throw error;
  }
};
