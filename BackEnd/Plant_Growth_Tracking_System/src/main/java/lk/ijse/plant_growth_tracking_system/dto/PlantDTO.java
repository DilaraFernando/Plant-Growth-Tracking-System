package lk.ijse.plant_growth_tracking_system.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PlantDTO {
    @Pattern(regexp = "^\\d+$", message = "Plant ID must be a valid integer")
    private Long plantId;

    @NotBlank(message = "Plant name is required")
    private String plantName;

    @NotBlank(message = "Species cannot be blank")
    private String species;

    @NotNull(message = "Planted date is required")
    private LocalDate plantedDate;

    private String status;

    @NotNull(message = "User ID is required")
    private Long userId;
}