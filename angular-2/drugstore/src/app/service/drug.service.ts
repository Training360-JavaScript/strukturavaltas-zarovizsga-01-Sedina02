import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Drug } from '../model/drug';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DrugService {

  entityName: string = 'drug';

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<Drug[]> {
    return this.http.get<Drug[]>(`${environment.apiUrl}${this.entityName}`);
  }
}
