import { Component, OnInit } from '@angular/core';
import { Inventory } from '../shared/inventory';


import { InventoryService } from '../services/inventory.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

   inventories: Inventory[];

  selectedItem: Inventory;

  constructor(private inventoryService: InventoryService) { }

  ngOnInit() {
    this.inventories = this.inventoryService.getInventory();
  }

 

  onSelect(item: Inventory){
    this.selectedItem = item;
  }
}
