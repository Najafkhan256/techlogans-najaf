import axios from "axios";

export const fetchData = async (url) => {
  try {
    const response = await axios.get(
      `http://localhost:1337/api${url}?populate=*`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // You can handle the error as needed
  }
};
