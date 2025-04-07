package com.example.Task_Manager.repository;

import com.example.Task_Manager.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {
    // Finds tasks by the username of the creator.
    List<Task> findByCreatedBy(String createdBy);
}
