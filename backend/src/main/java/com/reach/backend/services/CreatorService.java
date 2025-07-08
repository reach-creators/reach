package com.reach.backend.services;

import com.reach.backend.domain.tables.Creator;
import com.reach.backend.repositories.CreatorRepository;
import com.example.reach.backend.dto.CreatorInputDto;
import com.reach.backend.mappers.CreatorMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CreatorService {

  @Autowired private CreatorRepository repository;

  public Creator create(CreatorInputDto dto) {
    Creator entity = CreatorMapper.MAPPER.toEntity(dto);
    return repository.save(entity);
  }
}
