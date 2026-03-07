package lk.ijse.plant_growth_tracking_system.service;

import lk.ijse.plant_growth_tracking_system.dto.UserDTO;

import java.util.List;

public interface UserService {
    public void saveUser(UserDTO userDTO);

    public void updateUser(UserDTO userDTO);

    public void deleteUser(long userId);
    List<UserDTO> getAllUsers();

    UserDTO getSelectUser(long userId);
}
