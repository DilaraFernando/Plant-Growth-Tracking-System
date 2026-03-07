package lk.ijse.plant_growth_tracking_system.repository;

import lk.ijse.plant_growth_tracking_system.entity.Consultation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ConsultationRepository extends JpaRepository<Consultation ,Long> {
    List<Consultation> findByFarmer_UserId(Long userId);
}
