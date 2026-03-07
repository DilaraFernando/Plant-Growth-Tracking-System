package lk.ijse.plant_growth_tracking_system.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class WeatherAlertDTO {
    private Long alertId;
    @NotBlank(message = "Location is required")
    private String location;
    @NotBlank(message = "Message cannot be empty")
    private String alertMessage;
    private String severity;
    private LocalDateTime sentAt;
}