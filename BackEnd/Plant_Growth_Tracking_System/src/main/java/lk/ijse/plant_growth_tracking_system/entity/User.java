package lk.ijse.plant_growth_tracking_system.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;
    private String username;
    private String email;
    private String password;
    private String role;    //FARMER , EXPERT

    @OneToMany(mappedBy = "user" ,cascade = CascadeType.ALL)
    private List<Plant> plants;
}
