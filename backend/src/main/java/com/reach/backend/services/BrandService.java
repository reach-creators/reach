package com.reach.backend.services;

import com.reach.backend.domain.tables.Brand;
import com.reach.backend.repositories.BrandRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BrandService {

  @Autowired private BrandRepository brandRepository;

  public Brand createBrand(Brand brand) {
    return brandRepository.save(brand);
  }
}
