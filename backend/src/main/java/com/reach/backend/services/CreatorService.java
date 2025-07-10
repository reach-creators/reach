package com.reach.backend.services;

import com.example.reach.backend.dto.CreatorInputDto;
import com.reach.backend.domain.enums.Niche;
import com.reach.backend.domain.tables.Creator;
import com.reach.backend.repositories.CreatorRepository;

import jakarta.persistence.EntityNotFoundException;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CreatorService {

  @Autowired private CreatorRepository repository;

  public Creator create(Creator entity) {
    return repository.save(entity);
  }

  public Creator update(Integer id, CreatorInputDto dto) {
    Creator existing = repository.findById(id)
        .orElseThrow(() -> new EntityNotFoundException("Creator not found"));

    existing.setName(dto.getName());
    existing.setSalesPerMonth(dto.getSalesPerMonth());
    existing.setItemsSold(dto.getItemsSold());
    // Map DTO enum list to domain enum list
    List<Niche> niches = dto.getNiches().stream()
      .map(nicheEnum -> Niche.valueOf(nicheEnum.name()))
      .collect(Collectors.toList());
    existing.setNiches(niches);
    existing.setRegion(dto.getRegion());

    return repository.save(existing);
  }

  public Creator getById(Integer id) {
    return repository.findById(id)
        .orElseThrow(() -> new EntityNotFoundException("Creator not found"));
  }


}
