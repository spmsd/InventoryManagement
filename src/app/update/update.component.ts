import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Inventory,CategotyName } from '../shared/inventory';
import { InventoryService } from '../services/inventory.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators'; // to use params observable 

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
	
  @ViewChild('uform') updateFormDirective;

  updateForm: FormGroup;
  updateItem: Inventory;
  categoryType = CategotyName;
  inventories: Inventory[];
  item: Inventory;
  itemcopy: Inventory;

  constructor(private fb: FormBuilder,private inventoryservice: InventoryService,private route: ActivatedRoute,
    private location: Location) {
  	this.createForm();
  }

  ngOnInit() {

    //this.route.params.pipe(switchMap((params: Params) => this.inventoryservice.getSingleItem(params['id'])))
    //  .subscribe(item => {this.item = item[0]; this.itemcopy = item;});

    //this.inventoryService.getInventory().subscribe(inventories => {this.inventories = inventories;});

  }

  createForm() {
    this.updateForm = this.fb.group({
	    categories: ['', Validators.required ],
	    name: ['', Validators.required ],
	    image: '',
	    qty: ['', Validators.required ],
	    expr_date: ['', Validators.required ],
	    price: ['', Validators.required ],
	    seller: ['', Validators.required ]
    });
  }

  onSubmit() {
    this.updateItem = this.updateForm.value;
    this.itemcopy = this.updateItem;
    this.inventoryservice.addPostItem(this.itemcopy).subscribe(item => {this.item = item; this.itemcopy = item; console.log("hi ! the updated item : "); console.log(this.item);});

    
    this.updateForm.reset({
      categories: '',
      name: '',
      image: '',
      qty: '',
      expr_date: '',
      price: '',
      seller: ''
    });
    this.updateFormDirective.resetForm();
  }

}
