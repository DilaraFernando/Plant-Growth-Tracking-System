package lk.ijse.plant_growth_tracking_system.service;

import lk.ijse.plant_growth_tracking_system.dto.PlantDTO;
import lk.ijse.plant_growth_tracking_system.entity.Plant;

import java.util.List;

public interface PlantService {
    public void savePlant(PlantDTO plantDTO);

    public void updatePlant(PlantDTO plantDTO);

    public void deletePlant(long plantId);
    List<PlantDTO> getAllPlants();
    List<PlantDTO> getPlantsByUserId(long userId);
}
