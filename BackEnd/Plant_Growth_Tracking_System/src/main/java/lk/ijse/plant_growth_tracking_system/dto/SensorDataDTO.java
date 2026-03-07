package lk.ijse.plant_growth_tracking_system.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SensorDataDTO {
    private Long dataId;
    private Double temperature;
    private Double humidity;
    private Double soilMoisture;
    private LocalDateTime recordedAt;
    private Long plantId;
}