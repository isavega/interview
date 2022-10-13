import axios from "axios";

const apiUrl = "https://pokeapi.co/api/v2/pokemon/ditto";
const token = "xxyyzz";

export const sendGetRequest = async () => {
  try {
    // const response = await axios.get(apiUrl, {
    //   headers: { Authorization: `Bearer ${token}` },
    // });
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const sendPostRequest = async (data) => {
  try {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      data
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
