package lk.ijse.plant_growth_tracking_system.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Plant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long plantId;
    private String plantName;
    private String species;
    private LocalDate plantDate;
    private String status;  //GROWING , COMPLETED

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany(mappedBy = "plant" , cascade = CascadeType.ALL)
    private List<GrowthLogs> growth_logs;

    @OneToMany(mappedBy = "plant" , cascade = CascadeType.ALL)
    private List<SensorsData> sensors_data;
}

