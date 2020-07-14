import { Component, OnInit, Inject } from '@angular/core';

import { Category } from '../shared/category';
import { CategoryService } from '../services/category.service';

import { Inventory } from '../shared/inventory';
import { InventoryService } from '../services/inventory.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {


  categories: Category[];
 

  constructor(private categoryService: CategoryService,private inventoryService: InventoryService,  @Inject('baseURL') private baseURL) {
    
  }

  ngOnInit() {
    this.categoryService.getCategory().subscribe(categories => this.categories = categories);
    console.log(this.categories);
  }



  
}
