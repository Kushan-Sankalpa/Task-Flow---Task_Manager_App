package com.example.Task_Manager.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
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

}
