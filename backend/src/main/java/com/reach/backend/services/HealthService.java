package com.reach.backend.services;

import com.reach.backend.repositories.HealthRepository;
import com.reach.backend.wrappers.HelloWorldWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HealthService {

  @Autowired private HealthRepository healthRepository;

  public HelloWorldWrapper getHealth() {
    return new HelloWorldWrapper(this.healthRepository.getHelloWorld());
  }
}
