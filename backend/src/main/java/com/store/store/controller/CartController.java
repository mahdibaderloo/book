package com.store.store.controller;

import com.store.store.dto.AddToCartRequest;
import com.store.store.entity.Cart;
import com.store.store.entity.User;
import com.store.store.repository.UserRepository;
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
    private final UserRepository userRepository;

    @GetMapping("/{userId}")
    public Cart getCart(@PathVariable Long userId) {

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        return cartService.getOrCreateCart(user);
    }

    @PostMapping("/add")
    public Cart addToCart(@RequestBody AddToCartRequest request,
                          HttpServletRequest httpRequest) {

        User user = (User) httpRequest.getAttribute("user");

        if (user == null) {
            throw new RuntimeException("Unauthorized");
        }

        return cartService.addToCart(request, user);
    }
}