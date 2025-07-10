package com.reach.backend.controllers;

import com.example.reach.backend.api.CreatorApi;
import com.example.reach.backend.dto.CreatorDto;
import com.example.reach.backend.dto.CreatorInputDto;
import com.reach.backend.services.CreatorService;
import com.reach.backend.mappers.CreatorMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;

@Controller
public class CreatorController implements CreatorApi {

  @Autowired private CreatorService creatorService;

  @Override
  public ResponseEntity<CreatorDto> createCreator(CreatorInputDto creatorInputDto) {
    var entity = CreatorMapper.MAPPER.toEntity(creatorInputDto);
    var saved = creatorService.create(entity);
    return ResponseEntity.status(201).body(CreatorMapper.MAPPER.toDto(saved));
  }
}

