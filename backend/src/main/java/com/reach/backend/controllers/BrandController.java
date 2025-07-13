package com.reach.backend.controllers;

import static org.springframework.http.HttpStatus.CREATED;

import com.example.reach.backend.api.BrandApi;
import com.example.reach.backend.dto.BrandDto;
import com.reach.backend.domain.tables.Brand;
import com.reach.backend.mappers.BrandMapper;
import com.reach.backend.services.BrandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;

@Controller
public class BrandController implements BrandApi {
  @Autowired private BrandService brandService;

  @Override
  public ResponseEntity<BrandDto> getBrand(Integer id) {
    return ResponseEntity.ok(BrandMapper.MAPPER.map(brandService.getBrand(id)));
  }

  @Override
  public ResponseEntity<BrandDto> addBrand(BrandDto brandDto) {
    Brand brand = BrandMapper.MAPPER.map(brandDto);
    BrandDto createdBrand = BrandMapper.MAPPER.map(brandService.createBrand(brand));
    return new ResponseEntity<>(createdBrand, CREATED);
  }

  @Override
  public ResponseEntity<Void> updateBrand(BrandDto brandDto) {
    Brand brand = BrandMapper.MAPPER.map(brandDto);
    brandService.updateBrand(brand);
    return ResponseEntity.noContent().build();
  }
}
