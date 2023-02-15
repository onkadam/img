import axios from "axios";

//Axios is an HTTP client library based on promises 
const searchImage = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID MdMc_VbvrI7W-wBu_9kKggXt6Y-uDdNpc8BIZs7_HhU",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};
export default searchImage;
