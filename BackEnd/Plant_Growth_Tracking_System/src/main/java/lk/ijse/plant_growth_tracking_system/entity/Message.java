package lk.ijse.plant_growth_tracking_system.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.repository.cdi.Eager;

import java.time.LocalDateTime;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Message {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long messageId;
    private String messageText;
    private LocalDateTime sentAt;

    @ManyToOne
    @JoinColumn(name = "request_id")
    private Consultation consultation;

    @ManyToOne
    @JoinColumn(name = "sender_id")
    private User sender;
}
