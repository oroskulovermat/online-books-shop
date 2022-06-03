import axios from "axios";

export const PublicApi = axios.create({
    baseURL:'https://bo-ok-shop.herokuapp.com/api/v1/'
})
