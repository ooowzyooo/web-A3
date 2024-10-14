import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

export interface Category {
  CATEGORY_ID: number
  NAME: string
}

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private service: HttpClient) {}
  apiUrl: string = 'http://localhost:3002'

  fetchCategory(): Observable<Category[]> {
    return this.service.get<Category[]>(this.apiUrl + '/categories')
  }
}
