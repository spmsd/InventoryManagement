import { Component, OnInit,Input } from '@angular/core';
import { Inventory } from '../shared/inventory';

import { Category } from '../shared/category';

import { InventoryService } from '../services/inventory.service';

@Component({
  selector: 'app-itemdetail',
  templateUrl: './itemdetail.component.html',
  styleUrls: ['./itemdetail.component.scss']
})
export class ItemdetailComponent implements OnInit {
  
  @Input()
  category: Category;
  
  itemslist: Inventory[];

  displayItems: Inventory[];
 
  constructor(private inventoryService: InventoryService) { }

  ngOnInit() {
  		this.itemslist = this.inventoryService.getInventory();
      this.display();
  }

  

  display(){
    
    
  }


}




