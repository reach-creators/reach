package com.reach.backend.controllers;

import static com.reach.backend.mappers.HealthMapper.MAPPER;

import com.example.reach.backend.api.HealthApi;
import com.example.reach.backend.dto.HelloWorldDto;
import com.reach.backend.services.HealthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;

@Controller
public class HealthController implements HealthApi {

  @Autowired private HealthService healthService;

  @Override
  public ResponseEntity<HelloWorldDto> checkHealth() {
    return ResponseEntity.ok(MAPPER.map(healthService.getHealth().helloWorld()));
  }
}
