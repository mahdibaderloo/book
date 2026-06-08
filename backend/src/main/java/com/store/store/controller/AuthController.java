package com.store.store.controller;

import com.store.store.config.JwtService;
import com.store.store.dto.*;
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
    private final JwtService jwtService;

    @PostMapping("/register")
    public AuthResponse register(@RequestBody RegisterRequest request) {

        if (userRepository.existsByEmail(request.getEmail())) {
            throw new RuntimeException("Email already exists");
        }

        User user = new User();
        user.setUsername(request.getUsername());
        user.setEmail(request.getEmail());
        user.setPassword(request.getPassword());

        user = userRepository.save(user);

        UserDto userDto = new UserDto(
                user.getId(),
                user.getUsername(),
                user.getEmail(),
                user.getAvatar()
        );

        String token = jwtService.generateToken(user.getEmail());

        return new AuthResponse(token, userDto);
    }

    @PostMapping("/login")
    public AuthResponse login(@RequestBody LoginRequest request) {

        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (!user.getPassword().equals(request.getPassword())) {
            throw new RuntimeException("Wrong password");
        }

        UserDto userDto = new UserDto(
                user.getId(),
                user.getUsername(),
                user.getEmail(),
                user.getAvatar()
        );

        String token = jwtService.generateToken(user.getEmail());

        return new AuthResponse(token, userDto);
    }
}