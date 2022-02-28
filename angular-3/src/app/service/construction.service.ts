import { environment } from './../../environments/environment.prod';
import { Construction } from 'src/app/model/construction';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstructionService <T extends { id: number; [key: string]: any }> {
  apiUrl: string = environment.apiUrl;
  entityName: string = 'construction';
  endString: string = '';

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<Construction[]> {
    return this.http.get<Construction[]>(`${environment.apiUrl}${this.entityName}`);
  }

  get(id: number): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}/${this.endString}/${id}`);
  }

  create(construction: T): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}/${this.endString}`, construction);
  }

  update(construction: T): Observable<T> {
    return this.http.patch<T>(
      `${this.apiUrl}/${this.endString}/${construction.id}`,
      construction
    );
  }

  delete(construction: T): Observable<T> {
    return this.http.delete<T>(
      `${this.apiUrl}/${this.endString}/${construction.id}`
    );
  }
}
