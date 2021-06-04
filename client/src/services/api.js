import axios from "axios";

const apiURL = "https://findhacks.herokuapp.com/";

export const api = axios.create({ baseURL: apiURL });
