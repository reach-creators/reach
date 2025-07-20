package com.reach.backend.mappers;

import com.example.reach.backend.dto.LoginRequestDto;
import com.example.reach.backend.dto.SignupRequestDto;
import com.reach.backend.domain.LoginRequest;
import com.reach.backend.domain.tables.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;
import org.mapstruct.factory.Mappers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Mapper
public interface AuthMapper {

  AuthMapper MAPPER = Mappers.getMapper(AuthMapper.class);

  @Mapping(source = "role", target = "userType")
  User map(SignupRequestDto dto);

  LoginRequest map(LoginRequestDto dto);

  default User map(SignupRequestDto dto, PasswordEncoder passwordEncoder) {
    return map(dto.password(passwordEncoder.encode(dto.getPassword())));
  }

}
