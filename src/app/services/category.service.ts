import { Injectable } from '@angular/core';
import { Category } from '../shared/category';
import { CATEGORIES } from '../shared/categories';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  getCategory():  Observable<Category[]>{
  	return of(CATEGORIES);
  }
   
}



