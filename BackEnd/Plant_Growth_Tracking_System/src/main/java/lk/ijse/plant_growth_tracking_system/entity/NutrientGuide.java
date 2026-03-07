package lk.ijse.plant_growth_tracking_system.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class NutrientGuide {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long guideId;
    private String plantType;
    private Integer growthDay;
    private Integer waterVolumeMl;
    private String fertilizerType;

}
