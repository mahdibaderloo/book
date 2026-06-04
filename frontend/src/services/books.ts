const BASE_URL = "http://localhost:8081";

export async function getBooks() {
  const response = await fetch(`${BASE_URL}/products`);

  if (!response.ok) {
    throw new Error("Failed to fetch Books");
  }

  return response.json();
}
