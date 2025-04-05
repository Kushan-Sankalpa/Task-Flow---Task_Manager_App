package com.example.Task_Manager.repository;

import com.example.taskmanager.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository   // Marks this as a repository bean.
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username); // Finds a user by username.
}


