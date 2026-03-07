package lk.ijse.plant_growth_tracking_system.repository;

import lk.ijse.plant_growth_tracking_system.entity.WeatherAlerts;
import org.springframework.data.jpa.repository.JpaRepository;

public interface Weather_AlertsRepository extends JpaRepository<WeatherAlerts,Long> {
}
