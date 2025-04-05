package com.example.Task_Manager.repository;

import com.example.Task_Manager.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository   // Marks this as a Spring bean for data access.
public interface TaskRepository extends JpaRepository<Task, Long> { }
