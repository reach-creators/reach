package com.reach.backend.controllers;

import com.example.reach.backend.api.BrandApi;
import com.example.reach.backend.dto.BrandCreationDto;
import com.reach.backend.services.BrandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;

@Controller
public class BrandController implements BrandApi {
    @Autowired
    private BrandService brandService;

    public ResponseEntity<BrandCreationDto> createBrand(BrandCreationDto brandCreationDto) {
        brandService.createBrand(brandCreationDto);
        return ResponseEntity.ok().build();
    }
}
