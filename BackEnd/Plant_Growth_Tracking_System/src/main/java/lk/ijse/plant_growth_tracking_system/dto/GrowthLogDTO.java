package lk.ijse.plant_growth_tracking_system.dto;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class GrowthLogDTO {
    private Long logId;

    @NotNull(message = "Day number is required")
    @Min(value = 1, message = "Day number must be at least 1")
    @Max(value = 30, message = "Day number cannot exceed 30")
    private Integer dayNumber;

    private String imageUrl;

    @NotNull(message = "Height is required")
    private Double heightCm;

    private Integer leafCount;
    private LocalDate logDate;

    @NotNull(message = "Plant ID is required")
    private Long plantId;
}