package com.example.Task_Manager.service;

import com.example.Task_Manager.model.Task;
import com.example.Task_Manager.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class TaskService {

    @Autowired
    private TaskRepository taskRepository;

    // Get all tasks for the current user.
    public List<Task> getAllTasksForCurrentUser() {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        return taskRepository.findByCreatedBy(username);
    }

    // Retrieves a task by its ID.
    public Optional<Task> getTaskById(Long id) {
        return taskRepository.findById(id);
    }

    // Creates a new task and records the current user's username as the creator.
    public Task createTask(Task task) {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        task.setCreatedBy(username);
        return taskRepository.save(task);
    }


    // Updates an existing task identified by its ID.
    public Task updateTask(Long id, Task taskDetails) {
        Task task = taskRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Task not found with id " + id));
        task.setTitle(taskDetails.getTitle());
        task.setDescription(taskDetails.getDescription());
        task.setStatus(taskDetails.getStatus());
        return taskRepository.save(task);
    }

    // Deletes a task identified by its ID.
    public void deleteTask(Long id) {
        Task task = taskRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Task not found with id " + id));
        taskRepository.delete(task);
    }
}
