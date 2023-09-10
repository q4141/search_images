import axios from "axios";
import "./api.css";
import PRIVATE_API_KEY from "../key";
const searchImages = async (term) => {
  try {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      headers: {
        Authorization: `Client-ID ${PRIVATE_API_KEY}`,
      },
      params: {
        query: term,
      },
    });

    return response.data.results; // Обратите внимание, что это .results, а не .result
  } catch (error) {
    console.error("Ошибка при запросе к API:", error);
    return []; // Возвращайте пустой массив в случае ошибки или другую обработку ошибки по вашему усмотрению
  }
};


export default searchImages;
