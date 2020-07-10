import { Component, OnInit } from '@angular/core';

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
  itemslist: Inventory[];
  displaylist: Inventory[];

  selectedCategory: Category;

  constructor(private categoryService: CategoryService,private inventoryService: InventoryService) {
    this.displaylist = [];
  }

  ngOnInit() {
    this.categories = this.categoryService.getCategory();
    this.itemslist = this.inventoryService.getInventory();
  }

  onSelect(category: Category){
    this.displaylist = [];
    for(let key in this.itemslist){
      let value = this.itemslist[key];
      //console.log(category.cat_name);
      //console.log(value);
      if(category.cat_name == value.cat_name){
        this.displaylist.push(this.itemslist[key]);

      }
    }
  }
}
