package com.reach.backend.services;

import com.reach.backend.dto.LoginRequestDto;
import com.reach.backend.dto.LoginResponseDto;
import com.reach.backend.repositories.UserRepository;
import com.reach.backend.security.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {
    private final UserRepository userRepository;
    private final JwtUtil jwtUtil;
    private final AuthenticationManager authenticationManager;

    public LoginResponseDto authenticate(LoginRequestDto request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );

        var user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(); 
        var jwtToken = jwtUtil.generateToken(user);

        return LoginResponseDto.builder()
                .token(jwtToken)
                .build();
    }
}