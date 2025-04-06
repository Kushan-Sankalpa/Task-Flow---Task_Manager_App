package com.example.Task_Manager.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;



@Entity
@Table(name = "tasks")

public class Task {
    @Id // Marks this field as the primary key.
    @GeneratedValue(strategy = GenerationType.IDENTITY)  // Auto-generates the ID.
    private Long id;


    @Column(nullable = false)
    private String title;

    private String description;

    private String status;

    private LocalDateTime createdAt = LocalDateTime.now();

    private String createdBy;


    // No-argument constructor
    public Task() {
    }

    // All-argument constructor
    public Task(Long id, String title, String description, String status, LocalDateTime createdAt, String createdBy) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.status = status;
        this.createdAt = createdAt;
        this.createdBy = createdBy;
    }

    // Getters and Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
    public String getCreatedBy() { return createdBy; }
    public void setCreatedBy(String createdBy) { this.createdBy = createdBy; }

}
