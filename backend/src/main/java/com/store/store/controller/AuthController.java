package com.store.store.controller;

import com.store.store.dto.LoginRequest;
import com.store.store.dto.RegisterRequest;
import com.store.store.entity.User;
import com.store.store.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    private final UserRepository userRepository;

    @PostMapping("/register")
    public User register(
            @RequestBody RegisterRequest request
    ) {

        if(userRepository.existsByEmail(request.getEmail())) {
            throw new RuntimeException("Email already exists");
        }

        User user = new User();

        user.setUsername(request.getUsername());
        user.setEmail(request.getEmail());

        user.setPassword(request.getPassword());

        return userRepository.save(user);
    }

    @PostMapping("/login")
    public User login(
            @RequestBody LoginRequest request
    ) {

        User user = userRepository
                .findByEmail(request.getEmail())
                .orElseThrow(() ->
                        new RuntimeException("User not found"));

        if(!user.getPassword()
                .equals(request.getPassword())) {

            throw new RuntimeException("Wrong password");
        }

        return user;
    }
}