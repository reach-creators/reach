package com.reach.backend.mappers;

import com.example.reach.backend.dto.LoginRequestDto;
import com.example.reach.backend.dto.SignupRequestDto;
import com.reach.backend.domain.LoginRequest;
import com.reach.backend.domain.tables.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;
import org.mapstruct.factory.Mappers;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Mapper
public interface AuthMapper {
  AuthMapper MAPPER = Mappers.getMapper(AuthMapper.class);

  @Mapping(source = "role", target = "userType")
  @Mapping(source = "password", target = "password", qualifiedByName = "encrypt")
  User map(SignupRequestDto dto);

  @Mapping(source = "password", target = "password", qualifiedByName = "encrypt")
  LoginRequest map(LoginRequestDto dto);

  @Named(value = "encrypt")
  default String encrypt(String password) {
    return passwordEncoder().encode(password);
  }

  private PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
  }
}
