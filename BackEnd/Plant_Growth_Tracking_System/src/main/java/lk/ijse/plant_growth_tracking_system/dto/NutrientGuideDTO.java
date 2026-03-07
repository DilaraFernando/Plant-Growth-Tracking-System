package lk.ijse.plant_growth_tracking_system.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class NutrientGuideDTO {
    private Long guideId;
    @NotBlank(message = "Plant type is required")
    private String plantType;
    @NotNull(message = "Growth day is required")
    private Integer growthDay;
    private Integer waterVolumeMl;
    private String fertilizerType;
}