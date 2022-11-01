import axios from "axios";

const baseURL = "https://fakestoreapi.com";

const fetcher = () => {
    const client = axios.create({ baseURL, timeout: 31000 });
    return client;
};

export async function fetchProducts() {
    const products = await fetcher().get(`/products`);
    return products;
}
