package lk.ijse.plant_growth_tracking_system.repository;

import lk.ijse.plant_growth_tracking_system.entity.Plant;
import lk.ijse.plant_growth_tracking_system.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User,Long> {
    Optional<User> findByEmail(String email);
}
