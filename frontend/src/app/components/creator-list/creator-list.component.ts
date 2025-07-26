import { Component, inject } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CreatorSignUpRequest } from '../../data-access/auth/creator-signup-request';
import { CreatorService } from '../../services/creator-service';
import { Creator } from '../../data-access/creator';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-creator-list',
  imports: [TableModule, CommonModule],
  templateUrl: './creator-list.component.html',
  styleUrl: './creator-list.component.scss'
})
export class CreatorListComponent {
  // let's give demo values
  creators: Creator[] = [
    {
      name: 'John Doe',
      salesPerMonth: 1000,
      itemsSold: 100,
      niches: ['Fashion', 'Beauty'],
      region: 'New York'
    },
    {
      name: 'Jane Smith',
      salesPerMonth: 1500,
      itemsSold: 150,
      niches: ['Technology', 'Travel'],
      region: 'Los Angeles'
    },
    {
      name: 'Mike Johnson',
      salesPerMonth: 2000,
      itemsSold: 200,
      niches: ['Food', 'Travel'],
      region: 'Chicago'
    }
  ];
  private readonly creatorService = inject(CreatorService);
 async ngOnInit(): Promise<void> {
    const creators = await this.creatorService.getAllCreators();
    if (creators) {
      this.creators = creators;
    }
  }
   
}

