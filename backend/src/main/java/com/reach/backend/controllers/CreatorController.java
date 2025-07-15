package com.reach.backend.controllers;

import static com.reach.backend.mappers.CreatorMapper.MAPPER;
import static org.springframework.http.HttpStatus.CREATED;

import com.example.reach.backend.api.CreatorApi;
import com.example.reach.backend.dto.CreatorDto;
import com.reach.backend.domain.tables.Creator;
import com.reach.backend.services.CreatorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;

@Controller
public class CreatorController implements CreatorApi {

  @Autowired private CreatorService creatorService;

  @Override
  public ResponseEntity<CreatorDto> getCreator(Integer id) {
    Creator creator = creatorService.getCreator(id);
    return ResponseEntity.ok(MAPPER.map(creator));
  }

  @Override
  public ResponseEntity<CreatorDto> createCreator(CreatorDto creatorDto) {
    Creator creator = MAPPER.map(creatorDto);
    Creator createdCreator = creatorService.createCreator(creator);
    return new ResponseEntity<>(MAPPER.map(createdCreator), CREATED);
  }

  @Override
  public ResponseEntity<Void> updateCreator(CreatorDto creatorDto) {
    creatorService.updateCreator(MAPPER.map(creatorDto));
    return ResponseEntity.noContent().build();
  }
}
