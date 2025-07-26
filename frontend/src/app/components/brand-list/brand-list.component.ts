import { Component, inject } from '@angular/core';
import { Brand } from '../../data-access/brand';
import { BrandService } from '../../services/brand-service';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
@Component({
  selector: 'app-brand-list',
  imports: [TableModule, CommonModule, ButtonModule],
  templateUrl: './brand-list.component.html',
  styleUrl: './brand-list.component.scss'
})
export class BrandListComponent {
  // let's give demo values
  // let's fill the list in the form of export interface Brand {
//   id?: number;
//   name: string;
//   logo?: string; // Use string for URL
//   revenuePerMonth?: number;
//   itemsSold?: number;
//   averageUnitPrice?: number;
//   niches: string[];
//   region?: string;
// }

  brands: Brand[] = [
    {
      name: 'John Doe',
      revenuePerMonth: 1000,
      itemsSold: 100,
      averageUnitPrice: 10,
      niches: ['Fashion', 'Beauty'],
      region: 'New York'
    },
    {
      name: 'Jane Smith',
      revenuePerMonth: 1500,
      itemsSold: 150,
      averageUnitPrice: 15,
      niches: ['Technology', 'Travel'],
      region: 'Los Angeles'
    },
    {
      name: 'Mike Johnson',
      revenuePerMonth: 2000,
      itemsSold: 200,
      averageUnitPrice: 20,
      niches: ['Food', 'Travel'],
      region: 'Chicago'
    }
  ];
  private readonly brandService = inject(BrandService);
  private readonly router = inject(Router);
 async ngOnInit(): Promise<void> {
    const brands = await this.brandService.getAllBrands();
    if (brands) {
      this.brands = brands;
    }
  }
  applyToBrand(brand: Brand) {
    console.log(brand);
    this.router.navigate(['/brand-apply', brand.id]);
  }
}
