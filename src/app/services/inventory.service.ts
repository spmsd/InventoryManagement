import { Injectable } from '@angular/core';
import { Inventory } from '../shared/inventory';
import { INVENTORIES } from '../shared/inventories';
import { VEGETABLES } from '../shared/vegetables';


@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor() { }

  getInventory(): Inventory[]{
  	return INVENTORIES;
  }

 
  getSingleItem(inv_id: string): Inventory {
    return INVENTORIES.filter((item) => (item.inv_id === inv_id))[0];
  }
}
