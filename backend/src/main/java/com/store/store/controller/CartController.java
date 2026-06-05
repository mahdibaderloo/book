package com.store.store.controller;

import com.store.store.entity.CartItem;
import com.store.store.entity.Product;
import com.store.store.entity.User;
import com.store.store.repository.CartItemRepository;
import com.store.store.repository.ProductRepository;
import com.store.store.repository.UserRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cart")
@CrossOrigin(origins = "http://localhost:5173")
public class CartController {

    private final CartItemRepository cartRepository;
    private final UserRepository userRepository;
    private final ProductRepository productRepository;

    public CartController(
            CartItemRepository cartRepository,
            UserRepository userRepository,
            ProductRepository productRepository
    ) {
        this.cartRepository = cartRepository;
        this.userRepository = userRepository;
        this.productRepository = productRepository;
    }

    @GetMapping("/{userId}")
    public List<CartItem> getCart(@PathVariable Long userId) {

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        return cartRepository.findByUser(user);
    }

    @PostMapping("/{userId}/{productId}")
    public CartItem addToCart(
            @PathVariable Long userId,
            @PathVariable Long productId
    ) {

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new RuntimeException("Product not found"));

        CartItem item = new CartItem();

        item.setUser(user);
        item.setProduct(product);
        item.setQuantity(1);

        return cartRepository.save(item);
    }

    @DeleteMapping("/{cartItemId}")
    public String removeFromCart(@PathVariable Long cartItemId) {

        cartRepository.deleteById(cartItemId);

        return "Item removed from cart";
    }

}