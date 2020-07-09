import { Injectable } from '@angular/core';
import { Category } from '../shared/category';
import { CATEGORIES } from '../shared/categories';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  getCategory(): Category[]{
  	return CATEGORIES;
  }
}



