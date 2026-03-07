package lk.ijse.plant_growth_tracking_system.entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


import java.time.LocalDateTime;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class SensorsData {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long dateId;
    private Double temperature;
    private Double humidity;
    private Double soilMoisture;
    private LocalDateTime recordedAt;

    @ManyToOne
    @JoinColumn(name = "plant_id")
    private Plant plant;
}
