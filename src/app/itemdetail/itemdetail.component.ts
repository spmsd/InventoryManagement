import { Component, OnInit,Input } from '@angular/core';
import { Inventory } from '../shared/inventory';

@Component({
  selector: 'app-itemdetail',
  templateUrl: './itemdetail.component.html',
  styleUrls: ['./itemdetail.component.scss']
})
export class ItemdetailComponent implements OnInit {

  @Input()
  item: Inventory;
 
  constructor() { }

  ngOnInit() {
  }

}
