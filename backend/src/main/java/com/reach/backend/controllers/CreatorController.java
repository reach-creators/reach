package com.reach.backend.controllers;

import com.example.reach.backend.api.CreatorApi;
import com.example.reach.backend.dto.CreatorDto;
import com.example.reach.backend.dto.CreatorInputDto;
import com.reach.backend.services.CreatorService;
import com.reach.backend.domain.tables.Creator;
import com.reach.backend.mappers.CreatorMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;

@Controller
public class CreatorController implements CreatorApi {

  @Autowired
  private CreatorService creatorService;

  @Override
  public ResponseEntity<CreatorDto> createCreator(CreatorInputDto creatorInputDto) {
    var entity = CreatorMapper.MAPPER.toEntity(creatorInputDto);
    var saved = creatorService.create(entity);
    return ResponseEntity.status(201).body(CreatorMapper.MAPPER.toDto(saved));
  }

  @Override
  public ResponseEntity<CreatorDto> updateCreator(Integer id, CreatorInputDto dto) {
    Creator updated = creatorService.update(id, dto);
    CreatorDto response = CreatorMapper.MAPPER.toDto(updated);
    return ResponseEntity.ok(response);
  }

  @Override
  public ResponseEntity<CreatorDto> getCreatorById(Integer id) {
      Creator creator = creatorService.getById(id);
      CreatorDto dto = CreatorMapper.MAPPER.toDto(creator);
      return ResponseEntity.ok(dto);
  }

}

