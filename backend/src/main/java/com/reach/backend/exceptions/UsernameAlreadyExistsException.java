package com.reach.backend.exceptions;

public class UsernameAlreadyExistsException extends Exception {
  public UsernameAlreadyExistsException(String email) {
    super("User with email %s already exists".formatted(email));
  }
}
