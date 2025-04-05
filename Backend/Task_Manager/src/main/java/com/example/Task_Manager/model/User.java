package com.example.Task_Manager.model;


import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "users")

public class User {

        @Id // Primary key.
        @GeneratedValue(strategy = GenerationType.IDENTITY)  // Auto-generates the ID.
        private Long id;

        @Column(unique = true, nullable = false) // Username must be unique and not null.
        private String username;

        @Column(nullable = false)  // Password is required.
        private String password;
}

