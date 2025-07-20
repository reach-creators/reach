package com.reach.backend.exceptions;

import static org.springframework.http.HttpStatus.FORBIDDEN;

import com.example.reach.backend.dto.ErrorMessageDto;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public final class ApiExceptionHandler {

  @ExceptionHandler(EntityNotFoundException.class)
  public ResponseEntity<Void> entityNotFound(EntityNotFoundException ignored) {
    return ResponseEntity.notFound().build();
  }

  @ExceptionHandler(BadCredentialsException.class)
  public ResponseEntity<ErrorMessageDto> badCredentials(BadCredentialsException ignored) {
    return new ResponseEntity<>(
        new ErrorMessageDto().error("Invalid login credentials"), FORBIDDEN);
  }
}
