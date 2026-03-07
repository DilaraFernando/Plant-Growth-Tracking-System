package lk.ijse.plant_growth_tracking_system.repository;

import lk.ijse.plant_growth_tracking_system.entity.GrowthLogs;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface Growth_LogRepository extends JpaRepository<GrowthLogs,Long> {
    List<GrowthLogs> findByPlant_PlantId(Long plantId);
}
