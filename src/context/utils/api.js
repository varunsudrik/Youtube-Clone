import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
  params: { q: "desp", hl: "en", gl: "US" },
  headers: {
    "X-RapidAPI-Key": "4937bb121bmsh7609e948e1a4bacp133fdejsn9d1c8ce15bc9_",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

export const fetchDataFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
