package com.reach.backend.mappers;

import com.example.reach.backend.dto.BrandDto;
import com.example.reach.backend.dto.BrandSummaryDto;
import com.reach.backend.domain.tables.Brand;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface BrandMapper {
  BrandMapper MAPPER = Mappers.getMapper(BrandMapper.class);

  BrandDto map(Brand domain);

  Brand map(BrandDto dto);

  BrandSummaryDto mapToSummary(Brand brand);
}