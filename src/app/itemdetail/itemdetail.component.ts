import { Component, OnInit,Input } from '@angular/core';
import { Inventory } from '../shared/inventory';
import { Category } from '../shared/category';
import { InventoryService } from '../services/inventory.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-itemdetail',
  templateUrl: './itemdetail.component.html',
  styleUrls: ['./itemdetail.component.scss']
})
export class ItemdetailComponent implements OnInit {
 
  item: Inventory;
 
  constructor(private route: ActivatedRoute,
    private location: Location,
    private inventoryservice: InventoryService) { }

  ngOnInit() {
  		let inv_id = +this.route.snapshot.params['inv_id'];
  		this.item = this.inventoryservice.getSingleItem(inv_id.toString());

  }

  goBack(): void {
    this.location.back();
  }


}




