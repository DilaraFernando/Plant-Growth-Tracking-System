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
public class MessageDTO {
    private Long messageId;
    @NotBlank(message = "Message text cannot be blank")
    private String messageText;
    private LocalDateTime sentAt;
    @NotNull(message = "Consultation ID is required")
    private Long requestId;
    @NotNull(message = "Sender ID is required")
    private Long senderId;
}