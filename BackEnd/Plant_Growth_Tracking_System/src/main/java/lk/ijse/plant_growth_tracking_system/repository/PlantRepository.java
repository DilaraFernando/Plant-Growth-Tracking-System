package lk.ijse.plant_growth_tracking_system.repository;

import lk.ijse.plant_growth_tracking_system.entity.Plant;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PlantRepository extends JpaRepository<Plant ,Long> {
   List<Plant> findByUser_UserId(Long userId);
}
