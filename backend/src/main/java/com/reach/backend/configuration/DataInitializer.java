package com.reach.backend.configuration;

import com.reach.backend.domain.enums.UserType;
import com.reach.backend.domain.tables.User;
import com.reach.backend.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class DataInitializer implements CommandLineRunner {

  private final UserRepository userRepository;
  private final PasswordEncoder passwordEncoder;

  @Override
  public void run(String... args) throws Exception {
    if (userRepository.findByEmail("brand@example.com").isEmpty()) {
      User brandUser =
          User.builder()
              .email("brand@example.com")
              .password(passwordEncoder.encode("password123"))
              .userType(UserType.BRAND)
              .build();
      userRepository.save(brandUser);
    }

    if (userRepository.findByEmail("creator@example.com").isEmpty()) {
      User creatorUser =
          User.builder()
              .email("creator@example.com")
              .password(passwordEncoder.encode("password123"))
              .userType(UserType.CREATOR)
              .build();
      userRepository.save(creatorUser);
    }
  }
}
