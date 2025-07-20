package com.reach.backend.mappers;

import com.example.reach.backend.dto.LoginRequestDto;
import com.example.reach.backend.dto.SignupRequestDto;
import com.reach.backend.domain.LoginRequest;
import com.reach.backend.domain.tables.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;
import org.springframework.security.crypto.password.PasswordEncoder;

@Mapper
public interface AuthMapper {

  AuthMapper MAPPER = Mappers.getMapper(AuthMapper.class);

  @Mapping(source = "role", target = "userType")
  @Mapping(target = "id", ignore = true)
  User map(SignupRequestDto dto);

  LoginRequest map(LoginRequestDto dto);

  default User map(SignupRequestDto dto, PasswordEncoder passwordEncoder) {
    return map(dto.password(passwordEncoder.encode(dto.getPassword())));
  }
}
