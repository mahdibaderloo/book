import { BASE_URL } from "../config/api";

export async function getBooks() {
  const response = await fetch(`${BASE_URL}/products`);

  if (!response.ok) {
    throw new Error("Failed to fetch Books");
  }

  return response.json();
}

export async function getBook(id: number) {
  const response = await fetch(`${BASE_URL}/products/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch Books");
  }

  return response.json();
}
