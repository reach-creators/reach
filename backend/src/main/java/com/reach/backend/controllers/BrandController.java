package com.reach.backend.controllers;

import com.example.reach.backend.api.BrandApi;
import com.example.reach.backend.dto.BrandCreationDto;
import com.reach.backend.services.BrandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
public class BrandController implements BrandApi {
    @Autowired
    private BrandService brandService;

    @Override
    public ResponseEntity<BrandCreationDto> addBrand(@RequestBody BrandCreationDto brandCreationDto) {
        brandService.createBrand(brandCreationDto);
        return ResponseEntity.ok().build();
    }
}
