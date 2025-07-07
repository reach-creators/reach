package com.reach.backend.domain.tables;

import com.reach.backend.domain.enums.Niche;
import jakarta.persistence.*;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
public final class Brand {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;

  @Column(nullable = false)
  private String name;

  @Column(columnDefinition = "VARCHAR(2048)")
  private URL logo;

  @Column(name = "revenue_per_month")
  private Integer revenuePerMonth;

  @Column(name = "items_sold")
  private Integer itemsSold;

  @Column(name = "average_unit_price")
  private Double averageUnitPrice;

  @ElementCollection
  @CollectionTable(name = "brand_niches", joinColumns = @JoinColumn(name = "brand_id"))
  @Column(name = "niche_name")
  @Enumerated(EnumType.STRING)
  private List<Niche> niches = new ArrayList<>();

  private String region;
}
