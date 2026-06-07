package com.store.store.controller;

import com.store.store.dto.AddToCartRequest;
import com.store.store.entity.Cart;
import com.store.store.entity.User;
import com.store.store.service.CartService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/cart")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class CartController {

    private final CartService cartService;

    @GetMapping
    public Cart getCart(HttpServletRequest request) {

        User user = (User) request.getAttribute("user");

        if (user == null) {
            throw new RuntimeException("Unauthorized");
        }

        return cartService.getOrCreateCart(user);
    }

    @PostMapping("/add")
    public Cart addToCart(
            @RequestBody AddToCartRequest request,
            HttpServletRequest httpRequest
    ) {

        User user = (User) httpRequest.getAttribute("user");

        if (user == null) {
            throw new RuntimeException("Unauthorized");
        }

        return cartService.addToCart(request, user);
    }

    @DeleteMapping("/{productId}")
    public Cart removeFromCart(
            @PathVariable Long productId,
            HttpServletRequest request
    ) {

        User user = (User) request.getAttribute("user");

        if (user == null) {
            throw new RuntimeException("Unauthorized");
        }

        return cartService.removeFromCart(productId, user);
    }

    @PatchMapping("/{productId}/increase")
    public Cart increaseQuantity(
            @PathVariable Long productId,
            HttpServletRequest request
    ) {

        User user = (User) request.getAttribute("user");

        if (user == null) {
            throw new RuntimeException("Unauthorized");
        }

        return cartService.increaseQuantity(productId, user);
    }

    @PatchMapping("/{productId}/decrease")
    public Cart decreaseQuantity(
            @PathVariable Long productId,
            HttpServletRequest request
    ) {

        User user = (User) request.getAttribute("user");

        if (user == null) {
            throw new RuntimeException("Unauthorized");
        }

        return cartService.decreaseQuantity(productId, user);
    }
}