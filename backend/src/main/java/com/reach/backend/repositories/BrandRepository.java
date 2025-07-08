package com.reach.backend.repositories;

import com.reach.backend.domain.tables.Brand;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BrandRepository extends JpaRepository<Brand, Integer> {
}
