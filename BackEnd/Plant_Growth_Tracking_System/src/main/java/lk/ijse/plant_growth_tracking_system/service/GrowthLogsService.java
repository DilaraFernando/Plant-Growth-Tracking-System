package lk.ijse.plant_growth_tracking_system.service;

import lk.ijse.plant_growth_tracking_system.dto.GrowthLogDTO;

import java.util.List;

public interface GrowthLogsService {
    public void saveLog(GrowthLogDTO logDTO);

    public void updateLog(GrowthLogDTO logDTO);
    List<GrowthLogDTO> getLogsByPlantId(long plantId);

    public void deleteLog(long logId);

}
