import { BASE_URL } from "../config/api";
import type { Book } from "../types/types";

export async function addToCartApi(book: Book, token: string | null) {
  const response = await fetch(`${BASE_URL}/cart`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(book),
  });

  if (!response.ok) {
    throw new Error("Failed to add book to cart");
  }

  return response.json();
}

export async function removeFromCartApi(bookId: number, token: string | null) {
  const response = await fetch(`${BASE_URL}/cart/${bookId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to remove book from cart");
  }

  return response.json();
}

export async function increaseQuantityApi(
  bookId: string,
  token: string | null,
) {
  const response = await fetch(`${BASE_URL}/cart/${bookId}/increase`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to increase quantity");
  }

  return response.json();
}

export async function decreaseQuantityApi(
  bookId: string,
  token: string | null,
) {
  const response = await fetch(`${BASE_URL}/cart/${bookId}/decrease`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to decrease quantity");
  }

  return response.json();
}
