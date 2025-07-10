package com.reach.backend.services;

import com.reach.backend.domain.tables.Creator;
import com.reach.backend.repositories.CreatorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CreatorService {

  @Autowired private CreatorRepository repository;

  public Creator create(Creator entity) {
    return repository.save(entity);
  }
}
