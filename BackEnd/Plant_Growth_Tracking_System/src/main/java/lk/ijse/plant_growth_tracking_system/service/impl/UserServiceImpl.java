package lk.ijse.plant_growth_tracking_system.service.impl;

import jakarta.transaction.Transactional;
import lk.ijse.plant_growth_tracking_system.dto.UserDTO;
import lk.ijse.plant_growth_tracking_system.entity.User;
import lk.ijse.plant_growth_tracking_system.repository.UserRepository;
import lk.ijse.plant_growth_tracking_system.service.UserService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final ModelMapper modelMapper;

    @Override
    public void saveUser(UserDTO userDTO) {
        userRepository.save(modelMapper.map(userDTO, User.class));
    }

    @Override
    public void updateUser(UserDTO userDTO) {
        if (userRepository.existsById(userDTO.getUserId())){
            userRepository.save(modelMapper.map(userDTO, User.class));
        }
    }

    @Override
    public void deleteUser(long userId) {
        userRepository.deleteById(userId);
    }

    @Override
    public List<UserDTO> getAllUsers() {
        return modelMapper.map(userRepository.findAll(),new TypeToken<List<UserDTO>>() {}.getType());
    }

    @Override
    public UserDTO getSelectUser(long userId) {
        return modelMapper.map(userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found")), UserDTO.class);

    }


}
