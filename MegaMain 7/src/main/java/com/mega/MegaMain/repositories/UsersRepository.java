package com.mega.MegaMain.repositories;

import com.mega.MegaMain.entities.Users;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsersRepository extends JpaRepository<Users, Integer> {

    public Users findByEmail(String email);
}
