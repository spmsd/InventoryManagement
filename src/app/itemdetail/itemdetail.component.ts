import { Component, OnInit,Input } from '@angular/core';
import { Inventory } from '../shared/inventory';

import { Category } from '../shared/category';
@Component({
  selector: 'app-itemdetail',
  templateUrl: './itemdetail.component.html',
  styleUrls: ['./itemdetail.component.scss']
})
export class ItemdetailComponent implements OnInit {

  @Input()
  category: Category;
 
  constructor() { }

  ngOnInit() {
  }

}
