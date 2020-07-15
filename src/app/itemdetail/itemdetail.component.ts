import { Component, OnInit,Input, Inject, ViewChild } from '@angular/core'; 
import { Inventory } from '../shared/inventory';
import { Category } from '../shared/category';
import { InventoryService } from '../services/inventory.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators'; // to use params observable 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-itemdetail',
  templateUrl: './itemdetail.component.html',
  styleUrls: ['./itemdetail.component.scss']
})
export class ItemdetailComponent implements OnInit {

@ViewChild('eform') editFormDirective;
 
  item: Inventory;
  itemcopy: Inventory;
  editForm: FormGroup;
  editItem: Inventory;
 
  constructor(private route: ActivatedRoute,
    private location: Location,
    private inventoryservice: InventoryService,
    @Inject('baseURL') private baseURL,
    private fb: FormBuilder) 
    { 
        this.createForm();
    }

  ngOnInit() {

      this.route.params.pipe(switchMap((params: Params) => this.inventoryservice.getSingleItem(params['id'])))
      .subscribe(item => {this.item = item[0];});

  }

  createForm() {
    this.editForm = this.fb.group({
      qty: ['', Validators.required ],
      expr_date: ['', Validators.required ],
      price: ['', Validators.required ]
    });
  }

   onSubmit() {
    this.editItem = this.editForm.value;
    this.itemcopy = this.item;
    this.itemcopy.qty = this.editItem.qty;
    this.itemcopy.price = this.editItem.price;
    this.itemcopy.expr_date = this.editItem.expr_date;
    console.log("The item copy to edit");
    console.log(this.itemcopy);
    this.inventoryservice.updatePutItem(this.itemcopy).subscribe(item => {this.item = item; this.itemcopy = item; console.log("hi ! the edited item : "); console.log(this.item);});

    
    this.editForm.reset({
      qty: '',
      expr_date: '',
      price: ''
    });
    this.editFormDirective.resetForm();
  }

  goBack(): void {
    this.location.back();
  }



}




