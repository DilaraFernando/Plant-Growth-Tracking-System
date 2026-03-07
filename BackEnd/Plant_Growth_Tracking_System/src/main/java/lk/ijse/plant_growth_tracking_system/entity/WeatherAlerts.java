package lk.ijse.plant_growth_tracking_system.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class WeatherAlerts {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long alertId;
    private String location;
    private String alertMessage;
    private String severity;
    private LocalDateTime sentAt;

}
