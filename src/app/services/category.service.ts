import { Injectable } from '@angular/core';
import { Category } from '../shared/category';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategory():  Observable<Category[]>{
  	return this.http.get<Category[]>(baseURL + 'categories');
  }
   
}



