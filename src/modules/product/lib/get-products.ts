import type { Product } from "../types";

export async function getProducts() {
	const response = await fetch("https://fakestoreapi.com/products");
	const products = await response.json();
	return products as Product[];
}
