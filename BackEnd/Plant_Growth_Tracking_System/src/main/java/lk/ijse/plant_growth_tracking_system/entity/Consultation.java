package lk.ijse.plant_growth_tracking_system.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Consultation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long requestId;
    private String subject;
    private String description;
    private String status;
    private LocalDateTime createAt;

    @ManyToOne
    @JoinColumn(name = "farmer_id")
    private User farmer;

    @ManyToOne
    @JoinColumn(name = "expert_id")
    private User expert;

    @OneToMany(mappedBy = "consultation",cascade = CascadeType.ALL)
    private List<Message> messages;
}
