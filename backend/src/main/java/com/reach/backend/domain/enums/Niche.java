package com.reach.backend.domain.enums;

import lombok.Getter;

@Getter
public enum Niche {
  BEAUTY_AND_PERSONAL_CARE("Beauty & Personal Care"),
  HEALTH("Health"),
  NUTRITION_AND_WELLNESS("Nutrition & Wellness"),
  SPORTS_AND_OUTDOOR("Sports & Outdoor"),
  VITAMINS_MINERALS_AND_WELLNESS_SUPPLEMENTS("Vitamins, Minerals & Wellness Supplements"),
  PHONES_AND_ELECTRONICS("Phones & Electronics"),
  FASHION_ACCESSORIES("Fashion Accessories"),
  FRAGRANCE("Fragrance"),
  SKINCARE("Skincare");

  private final String value;

  Niche(String value) {
    this.value = value;
  }
}
