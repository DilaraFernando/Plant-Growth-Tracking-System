package lk.ijse.plant_growth_tracking_system.service;

import lk.ijse.plant_growth_tracking_system.dto.ConsultationDTO;
import java.util.List;

public interface ConsultationService {
    void createRequest(ConsultationDTO consultationDTO);

    void updateRequestStatus(long requestId, String status);
    List<ConsultationDTO> getRequestsByFarmerId(long farmerId);
    List<ConsultationDTO> getAllPendingRequests();
}
