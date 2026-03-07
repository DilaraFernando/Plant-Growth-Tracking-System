package lk.ijse.plant_growth_tracking_system.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ConsultationDTO {
    private Long requestId;
    @NotBlank(message = "Subject is required")
    private String subject;
    @NotBlank(message = "Description is required")
    private String description;
    private String status;
    private LocalDateTime createdAt;
    @NotNull(message = "Farmer ID is required")
    private Long farmerId;
    private Long expertId;
}