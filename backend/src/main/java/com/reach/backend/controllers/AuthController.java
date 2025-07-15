package com.reach.backend.controllers;

import static com.reach.backend.mappers.AuthMapper.MAPPER;

import com.example.reach.backend.api.AuthApi;
import com.example.reach.backend.dto.AuthResponseDto;
import com.example.reach.backend.dto.SignupRequestDto;
import com.reach.backend.exceptions.UsernameAlreadyExistsException;
import com.reach.backend.services.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;

@Controller
public class AuthController implements AuthApi {

  @Autowired private AuthService authService;

  @Override
  public ResponseEntity<AuthResponseDto> signupAuth(SignupRequestDto signupRequestDto)
      throws UsernameAlreadyExistsException {
    String token = authService.createAuthentication(MAPPER.map(signupRequestDto));
    return ResponseEntity.ok(new AuthResponseDto().token(token));
  }

  @Override
  public ResponseEntity<AuthResponseDto> loginAuth(
      com.example.reach.backend.dto.LoginRequestDto loginRequestDto) {
    String token = authService.authenticate(MAPPER.map(loginRequestDto));
    return ResponseEntity.ok(new AuthResponseDto().token(token));
  }
}
