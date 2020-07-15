import { Component, OnInit, Inject } from '@angular/core';
import { Inventory } from '../shared/inventory';
import { InventoryService } from '../services/inventory.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators'; // to use params observable 

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

	displaylist: Inventory[];

  constructor(private route: ActivatedRoute,
    private location: Location,
    private inventoryservice: InventoryService,
     @Inject('baseURL') private baseURL) { }

  ngOnInit() {
  	//let cat_name = this.route.snapshot.params['cat_name'];
    //console.log(cat_name);
  	//this.inventoryservice.getCategoryList(cat_name.toString()).subscribe(displaylist => this.displaylist = displaylist);
    //console.log(this.displaylist);

    this.route.params.pipe(switchMap((params: Params) => this.inventoryservice.getCategoryList(params['cat_name'])))
    .subscribe(displaylist => {this.displaylist = displaylist; });
  }

  goBack(): void {
    this.location.back();
  }

}
