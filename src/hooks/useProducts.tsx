import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../api";

const useProducts = () => {
    return useQuery(["products"], async () => {
        const { data } = await fetchProducts();
        return data;
    });
};

export default useProducts;
