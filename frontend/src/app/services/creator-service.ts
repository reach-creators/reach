import { Injectable , inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Creator } from '../data-access/creator';
import { creators } from './endpoints/api-routes';

@Injectable({
  providedIn: 'root'
})
export class CreatorService {
  private readonly httpClient = inject(HttpClient);
  async getAllCreators() {
    return await this.httpClient.get<Creator[]>(creators).toPromise();
  }
}
