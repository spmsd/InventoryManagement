import { Component, OnInit } from '@angular/core';
import { Inventory } from '../shared/inventory';
import { InventoryService } from '../services/inventory.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

	displaylist: Inventory[];

  constructor(private route: ActivatedRoute,
    private location: Location,
    private inventoryservice: InventoryService) { }

  ngOnInit() {
  	let cat_name = this.route.snapshot.params['cat_name'];
    console.log(cat_name);
  	this.displaylist = this.inventoryservice.getCategoryList(cat_name.toString());
    console.log(this.displaylist);
  }

  goBack(): void {
    this.location.back();
  }

}
