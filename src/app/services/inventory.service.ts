import { Injectable } from '@angular/core';
import { Inventory } from '../shared/inventory';
import { INVENTORIES } from '../shared/inventories';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor() { }

  getInventory(): Inventory[]{
  	return INVENTORIES;
  }
}
