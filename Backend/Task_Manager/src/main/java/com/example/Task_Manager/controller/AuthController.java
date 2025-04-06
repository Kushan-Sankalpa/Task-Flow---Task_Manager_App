package com.example.Task_Manager.controller;

import com.example.Task_Manager.model.User;
import com.example.Task_Manager.security.JwtUtil;
import com.example.Task_Manager.security.CustomUserDetailsService;
import com.example.Task_Manager.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.*;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private CustomUserDetailsService userDetailsService;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private UserService userService;

    // Register a new user.
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {
        // Check if user already exists using the service.
        if (userService.existsByUsername(user.getUsername())) {
            // Return HTTP 409 Conflict with a custom error message.
            return ResponseEntity.status(HttpStatus.CONFLICT)
                    .body("User already exists. Please try a different username.");
        }

        // Otherwise, register the new user.
        userService.registerUser(user);
        return ResponseEntity.ok("User registered successfully");
    }

    // Log in and get a JWT token.
    @PostMapping("/login")
    public String login(@RequestBody User user) throws Exception {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword())
            );
        } catch (BadCredentialsException e) {
            throw new Exception("Incorrect username or password", e);
        }
        final UserDetails userDetails = userDetailsService.loadUserByUsername(user.getUsername());
        final String jwt = jwtUtil.generateToken(userDetails.getUsername());
        return jwt;
    }
}
