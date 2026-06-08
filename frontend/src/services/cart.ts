import { BASE_URL } from "../config/api";

export async function getCartApi(token: string | null) {
  const response = await fetch(`${BASE_URL}/carts`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch cart");
  }

  return response.json();
}

export async function addToCartApi(bookId: number, token: string | null) {
  const response = await fetch(`${BASE_URL}/carts/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ productId: bookId }),
  });

  if (!response.ok) {
    throw new Error("Failed to add book to cart");
  }

  return response.json();
}

export async function removeFromCartApi(bookId: number, token: string | null) {
  const response = await fetch(`${BASE_URL}/carts/${bookId}`, {
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
  bookId: number,
  token: string | null,
) {
  const response = await fetch(`${BASE_URL}/carts/${bookId}/increase`, {
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
  bookId: number,
  token: string | null,
) {
  const response = await fetch(`${BASE_URL}/carts/${bookId}/decrease`, {
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
