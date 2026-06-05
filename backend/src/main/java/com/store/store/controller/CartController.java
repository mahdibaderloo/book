package com.store.store.controller;

import com.store.store.entity.Cart;
import com.store.store.entity.CartItem;
import com.store.store.entity.Product;
import com.store.store.repository.CartRepository;
import com.store.store.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/cart")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class CartController {

    private final CartRepository cartRepository;
    private final ProductRepository productRepository;

    @GetMapping("/{userId}")
    public Cart getCart(
            @PathVariable Long userId
    ) {
        return cartRepository.findByUserId(userId)
                .orElseThrow();
    }

    @PostMapping("/{userId}/add/{productId}")
    public Cart addProductToCart(
            @PathVariable Long userId,
            @PathVariable Long productId
    ) {

        Cart cart = cartRepository
                .findByUserId(userId)
                .orElseThrow();

        Product product = productRepository
                .findById(productId)
                .orElseThrow();

        CartItem item = new CartItem();

        item.setCart(cart);
        item.setProduct(product);
        item.setQuantity(1);

        cart.getItems().add(item);

        return cartRepository.save(cart);
    }
}