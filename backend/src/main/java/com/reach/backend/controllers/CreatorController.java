package com.reach.backend.controllers;

import static com.reach.backend.mappers.CreatorMapper.MAPPER;
import static org.springframework.http.HttpStatus.CREATED;

import com.example.reach.backend.api.CreatorApi;
import com.example.reach.backend.dto.CreatorDto;
import com.example.reach.backend.dto.CreatorSummaryPageDto;
import com.reach.backend.domain.tables.Creator;
import com.reach.backend.services.CreatorService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;

@RequiredArgsConstructor
@Controller
public class CreatorController implements CreatorApi {

  private final CreatorService creatorService;

  @Override
  public ResponseEntity<CreatorSummaryPageDto> getAllCreators(Integer page, Integer size) {
    Pageable pageable = PageRequest.of(page, size);
    Page<Creator> creatorPage = creatorService.getAllCreators(pageable);

    CreatorSummaryPageDto response = new CreatorSummaryPageDto();
    response.setContent(creatorPage.getContent().stream().map(MAPPER::mapToSummary).toList());
    response.setTotalPages(creatorPage.getTotalPages());
    response.setTotalElements(creatorPage.getTotalElements());
    response.setSize(creatorPage.getSize());
    response.setNumber(creatorPage.getNumber());

    return ResponseEntity.ok(response);
  }

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