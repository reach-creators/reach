package com.reach.backend.exceptions;

import jakarta.persistence.EntityNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public final class ApiExceptionHandler {

  @ExceptionHandler(EntityNotFoundException.class)
  public ResponseEntity<Void> entityNotFound(EntityNotFoundException ignored) {
    return ResponseEntity.notFound().build();
  }
}
