package com.reach.backend.services;

import com.reach.backend.domain.LoginRequest;
import com.reach.backend.domain.tables.User;
import com.reach.backend.exceptions.UsernameAlreadyExistsException;
import com.reach.backend.repositories.UserRepository;
import com.reach.backend.security.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

  @Autowired private UserRepository userRepository;
  @Autowired private JwtUtil jwtUtil;
  @Autowired private AuthenticationManager authenticationManager;

  public String createAuthentication(User user) throws UsernameAlreadyExistsException {
    if (userRepository.findByEmail(user.getEmail()).isPresent()) {
      throw new UsernameAlreadyExistsException(user.getEmail());
    }
    userRepository.save(user);
    return jwtUtil.generateToken(user);
  }

  public String authenticate(LoginRequest request) {
    authenticationManager.authenticate(
        new UsernamePasswordAuthenticationToken(request.email(), request.password()));

    var user = userRepository.findByEmail(request.email()).orElseThrow();

    return jwtUtil.generateToken(user);
  }
}
