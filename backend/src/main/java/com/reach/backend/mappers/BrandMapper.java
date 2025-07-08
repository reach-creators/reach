package com.reach.backend.mappers;

import com.example.reach.backend.dto.BrandCreationDto;
import com.reach.backend.domain.tables.Brand;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import java.net.URI;


@Mapper
public interface BrandMapper {
    BrandMapper MAPPER = Mappers.getMapper(BrandMapper.class);

    BrandCreationDto toDto(Brand entity);
    Brand toEntity(BrandCreationDto dto);

    // Custom mapping: String (DTO) -> URI (Entity)
    default URI map(String value) {
        return value == null ? null : URI.create(value);
    }

    // Custom mapping: URI (Entity) -> String (DTO)
    default String map(URI uri) {
        return uri == null ? null : uri.toString();
    }
}
