package com.reach.backend.services;

import com.reach.backend.domain.tables.Creator;
import com.reach.backend.repositories.CreatorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CreatorService {

  @Autowired private CreatorRepository repository;

  public Creator getCreator(Integer id) {
    return repository.getReferenceById(id);
  }

  public Creator createCreator(Creator creator) {
    return repository.save(creator);
  }

  public void updateCreator(Creator creator) {
    getCreator(creator.getId()); // Throws exception if creator not found
    repository.save(creator);
  }
}
