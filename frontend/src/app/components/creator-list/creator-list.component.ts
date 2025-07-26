import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CreatorSignUpRequest } from '../../data-access/auth/creator-signup-request';
@Component({
  selector: 'app-creator-list',
  imports: [TableModule],
  templateUrl: './creator-list.component.html',
  styleUrl: './creator-list.component.scss'
})
export class CreatorListComponent {
  creators: CreatorSignUpRequest[] = [];

  ngOnInit(): void {
    this.authendpoints.getCreators().subscribe((creators) => {
      this.creators = creators;
    });
  }
}

