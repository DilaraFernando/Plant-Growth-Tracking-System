package lk.ijse.plant_growth_tracking_system.repository;

import lk.ijse.plant_growth_tracking_system.entity.NutrientGuide;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface Nutrient_GuideRepository extends JpaRepository<NutrientGuide,Long> {
    Optional<NutrientGuide> findByPlantTypeAndGrowthDay(String plantType, Integer growthDay);
}
