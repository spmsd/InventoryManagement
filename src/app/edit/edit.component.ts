import { Component, OnInit } from '@angular/core';

import { Category } from '../shared/category';
import { CategoryService } from '../services/category.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {


  categories: Category[];

  selectedCategory: Category;

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categories = this.categoryService.getCategory();
  }

  onSelect(category: Category){
    this.selectedCategory = category;
  }
}
