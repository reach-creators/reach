package com.reach.backend.mappers;

import com.example.reach.backend.dto.HelloWorldDto;
import com.reach.backend.domain.HelloWorld;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface HealthMapper {
  HealthMapper MAPPER = Mappers.getMapper(HealthMapper.class);

  HelloWorldDto map(HelloWorld domain);
}
