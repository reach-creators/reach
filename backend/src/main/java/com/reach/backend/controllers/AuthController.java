package com.reach.backend.controllers;

import static com.reach.backend.mappers.AuthMapper.MAPPER;

import com.example.reach.backend.api.AuthApi;
import com.example.reach.backend.dto.AuthResponseDto;
import com.example.reach.backend.dto.SignupRequestDto;
import com.reach.backend.exceptions.UsernameAlreadyExistsException;
import com.reach.backend.services.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;

@RequiredArgsConstructor
@Controller
public class AuthController implements AuthApi {

  private final AuthService authService;
  private final PasswordEncoder passwordEncoder;

  @Override
  public ResponseEntity<AuthResponseDto> signupAuth(SignupRequestDto signupRequestDto)
      throws UsernameAlreadyExistsException {
    String token = authService.createAuthentication(MAPPER.map(signupRequestDto, passwordEncoder));
    return ResponseEntity.ok(new AuthResponseDto().token(token));
  }

  @Override
  public ResponseEntity<AuthResponseDto> loginAuth(
      com.example.reach.backend.dto.LoginRequestDto loginRequestDto) {
    String token = authService.authenticate(MAPPER.map(loginRequestDto));
    return ResponseEntity.ok(new AuthResponseDto().token(token));
  }
}
