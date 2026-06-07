package com.store.store.service;

import com.store.store.dto.AddToCartRequest;
import com.store.store.entity.Cart;
import com.store.store.entity.CartItem;
import com.store.store.entity.Product;
import com.store.store.entity.User;
import com.store.store.repository.CartItemRepository;
import com.store.store.repository.CartRepository;
import com.store.store.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CartService {

    private final CartRepository cartRepository;
    private final ProductRepository productRepository;
    private final CartItemRepository cartItemRepository;

    public Cart getOrCreateCart(User user) {

        if (user.getCart() == null) {

            Cart cart = new Cart();

            cart.setUser(user);

            user.setCart(cart);

            return cartRepository.save(cart);
        }

        return user.getCart();
    }

    public Cart addToCart(
            AddToCartRequest request,
            User user
    ) {

        Cart cart = getOrCreateCart(user);

        Product product =
                productRepository.findById(request.getProductId())
                        .orElseThrow(() ->
                                new RuntimeException("Product not found"));

        CartItem existingItem =
                cart.getItems()
                        .stream()
                        .filter(item ->
                                item.getProductId()
                                        .equals(product.getId()))
                        .findFirst()
                        .orElse(null);

        if (existingItem != null) {

            existingItem.setQuantity(
                    existingItem.getQuantity() + 1
            );

            cartItemRepository.save(existingItem);

        } else {

            CartItem item = new CartItem();

            item.setCart(cart);

            item.setProductId(product.getId());
            item.setProductTitle(product.getTitle());
            item.setPrice(product.getPrice());
            item.setImageUrl(product.getImageUrl());

            item.setQuantity(1);

            cart.getItems().add(item);

            cartItemRepository.save(item);
        }

        return cartRepository.save(cart);
    }

    public Cart removeFromCart(
            Long productId,
            User user
    ) {

        Cart cart = getOrCreateCart(user);

        CartItem item =
                cart.getItems()
                        .stream()
                        .filter(i ->
                                i.getProductId()
                                        .equals(productId))
                        .findFirst()
                        .orElseThrow(() ->
                                new RuntimeException("Item not found"));

        cart.getItems().remove(item);

        cartItemRepository.delete(item);

        return cartRepository.save(cart);
    }

    public Cart increaseQuantity(
            Long productId,
            User user
    ) {

        Cart cart = getOrCreateCart(user);

        CartItem item =
                cart.getItems()
                        .stream()
                        .filter(i ->
                                i.getProductId()
                                        .equals(productId))
                        .findFirst()
                        .orElseThrow(() ->
                                new RuntimeException("Item not found"));

        item.setQuantity(item.getQuantity() + 1);

        cartItemRepository.save(item);

        return cart;
    }

    public Cart decreaseQuantity(
            Long productId,
            User user
    ) {

        Cart cart = getOrCreateCart(user);

        CartItem item =
                cart.getItems()
                        .stream()
                        .filter(i ->
                                i.getProductId()
                                        .equals(productId))
                        .findFirst()
                        .orElseThrow(() ->
                                new RuntimeException("Item not found"));

        if (item.getQuantity() == 1) {

            cart.getItems().remove(item);

            cartItemRepository.delete(item);

        } else {

            item.setQuantity(item.getQuantity() - 1);

            cartItemRepository.save(item);
        }

        return cart;
    }
}