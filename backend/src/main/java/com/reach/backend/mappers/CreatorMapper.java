package com.reach.backend.mappers;

import com.example.reach.backend.dto.CreatorDto;
import com.reach.backend.domain.tables.Creator;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface CreatorMapper {
  CreatorMapper MAPPER = Mappers.getMapper(CreatorMapper.class);

  CreatorDto map(Creator domain);

  Creator map(CreatorDto dto);
}
