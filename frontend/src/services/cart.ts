import { BASE_URL } from "../config/api";
import type { Book } from "../types/types";

// export async function getCart(userId: number) {
//   const response = await fetch(`${BASE_URL}/cart`);
// }

export async function addToCartApi(book: Book, token: string) {
  const response = await fetch(`${BASE_URL}/cart`, {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(book),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch Books");
  }

  return response.json();
}
