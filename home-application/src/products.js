const API_SERVER = "http://localhost:8001";

export const getProducts = () =>
    fetch(`${API_SERVER}/products`).then(response => response.json());


export const getProductsById = (id) =>
    fetch(`${API_SERVER}/products/${id}`).then(response => response.json());


export const currency = new Intl.NumberFormat("en-UK", {
    style: "currency",
    currency: "INR"
});