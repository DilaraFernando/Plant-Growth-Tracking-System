package lk.ijse.plant_growth_tracking_system.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDate;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class GrowthLogs {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long logId;
    private Integer dayNumber;
    private String imageUrl;
    private Double heightCm;
    private Integer leafCount;
    private LocalDate logDate;

    @ManyToOne
    @JoinColumn(name = "plant_id")
    private Plant plant;

}
