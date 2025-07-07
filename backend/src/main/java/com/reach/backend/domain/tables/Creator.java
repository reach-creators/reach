package com.reach.backend.domain.tables;

import com.reach.backend.domain.enums.Niche;
import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
public final class Creator {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;

  @Column(nullable = false)
  private String name;

  @Column(name = "sales_per_month")
  private Integer salesPerMonth;

  @Column(name = "items_sold")
  private Integer itemsSold;

  @ElementCollection
  @CollectionTable(name = "creator_niches", joinColumns = @JoinColumn(name = "creator_id"))
  @Column(name = "niche_name")
  @Enumerated(EnumType.STRING)
  private List<Niche> niches = new ArrayList<>();

  private String region;
}
