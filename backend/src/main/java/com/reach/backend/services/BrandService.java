package com.reach.backend.services;

import com.example.reach.backend.dto.BrandCreationDto;
import com.reach.backend.domain.tables.Brand;
import com.reach.backend.mappers.BrandMapper;
import com.reach.backend.repositories.BrandRepository;
import org.mapstruct.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BrandService {

    @Autowired
    private BrandRepository brandRepository;

    public void createBrand(BrandCreationDto brandCreationDto) {
        Brand brand = BrandMapper.MAPPER.map(brandCreationDto);
        brandRepository.save(brand);
    }
}
