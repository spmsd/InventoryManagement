import { Component, OnInit,Input, Inject } from '@angular/core'; 
import { Inventory } from '../shared/inventory';
import { Category } from '../shared/category';
import { InventoryService } from '../services/inventory.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators'; // to use params observable 


@Component({
  selector: 'app-itemdetail',
  templateUrl: './itemdetail.component.html',
  styleUrls: ['./itemdetail.component.scss']
})
export class ItemdetailComponent implements OnInit {
 
  item: Inventory;
 
  constructor(private route: ActivatedRoute,
    private location: Location,
    private inventoryservice: InventoryService,
    @Inject('baseURL') private baseURL) { }

  ngOnInit() {

      this.route.params.pipe(switchMap((params: Params) => this.inventoryservice.getSingleItem(params['inv_id'])))
      .subscribe(item => {this.item = item[0];});

  }

  goBack(): void {
    this.location.back();
  }


}




