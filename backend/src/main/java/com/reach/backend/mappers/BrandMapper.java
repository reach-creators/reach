package com.reach.backend.mappers;

import com.example.reach.backend.dto.BrandCreationDto;
import com.reach.backend.domain.tables.Brand;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;
import org.mapstruct.factory.Mappers;

import java.net.MalformedURLException;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.URL;


@Mapper
public interface BrandMapper {
    BrandMapper MAPPER = Mappers.getMapper(BrandMapper.class);

    @Mapping(source = "logo", target = "logo", qualifiedByName = "fromUri")
    BrandCreationDto map(Brand entity);

    @Mapping(source = "logo", target = "logo", qualifiedByName = "toUri")
    Brand map(BrandCreationDto dto);

    @Named(value = "toUri")
    default URI map(URL value) throws URISyntaxException {
        if (value == null) {
            return null;
        }
        return value.toURI();
    }

    @Mapping(value = "fromUri")
    default URL map(URI uri) throws MalformedURLException {
        if (uri == null) {
            return null;
        }
        return uri.toURL();
    }
}
