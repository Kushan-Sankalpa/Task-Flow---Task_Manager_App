package com.example.Task_Manager.model;


import jakarta.persistence.*;

@Entity
@Table(name = "users")

public class User {

        @Id // Primary key.
        @GeneratedValue(strategy = GenerationType.IDENTITY)  // Auto-generates the ID.
        private Long id;

        @Column(unique = true, nullable = false)
        private String username;

        @Column(nullable = false)
        private String password;

        // No-argument constructor
        public User() {
        }

        // All-argument constructor
        public User(Long id, String username, String password) {
                this.id = id;
                this.username = username;
                this.password = password;
        }

        // Getters and Setters

        public Long getId() {
                return id;
        }

        public void setId(Long id) {
                this.id = id;
        }

        public String getUsername() {
                return username;
        }

        public void setUsername(String username) {
                this.username = username;
        }

        public String getPassword() {
                return password;
        }

        public void setPassword(String password) {
                this.password = password;
        }
}

