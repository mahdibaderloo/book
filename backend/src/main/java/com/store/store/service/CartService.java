package com.store.store.service;

import com.store.store.entity.*;
import com.store.store.repository.CartRepository;
import com.store.store.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import com.store.store.dto.AddToCartRequest;
import com.store.store.entity.CartItem;

@Service
@RequiredArgsConstructor
public class CartService {

    private final CartRepository cartRepository;
    private final UserRepository userRepository;

    public Cart getOrCreateCart(User user) {

        return cartRepository.findByUser(user)
                .orElseGet(() -> {
                    Cart cart = new Cart();
                    cart.setUser(user);
                    return cartRepository.save(cart);
                });
    }

    public Cart addToCart(AddToCartRequest request, User user) {

        Cart cart = getOrCreateCart(user);

        for (CartItem item : cart.getItems()) {
            if (item.getProductTitle().equals(request.getTitle())) {
                item.setQuantity(item.getQuantity() + 1);
                return cartRepository.save(cart);
            }
        }

        CartItem newItem = new CartItem();
        newItem.setProductTitle(request.getTitle());
        newItem.setPrice(request.getPrice());
        newItem.setImageUrl(request.getImageUrl());
        newItem.setQuantity(1);
        newItem.setCart(cart);

        cart.getItems().add(newItem);

        return cartRepository.save(cart);
    }
}

