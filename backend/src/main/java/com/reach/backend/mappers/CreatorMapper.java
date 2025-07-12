package com.reach.backend.mappers;

import com.example.reach.backend.dto.CreatorDto;
import com.example.reach.backend.dto.CreatorInputDto;
import com.reach.backend.domain.tables.Creator;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface CreatorMapper {
  CreatorMapper MAPPER = Mappers.getMapper(CreatorMapper.class);

  @Mapping(target = "id", ignore = true)
  Creator toEntity(CreatorInputDto dto);

  CreatorDto toDto(Creator entity);
}
