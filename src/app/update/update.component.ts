import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Inventory } from '../shared/inventory';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
	
  updateForm: FormGroup;
  updateItem: Inventory;

  constructor(private fb: FormBuilder) {
  	this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.updateForm = this.fb.group({
      	inv_id: '';
	    cat_name: '';
	    prod_name: '';
	    image: '';
	    qty: '';
	    expr_date: '';
	    price: '';
	    seller: '';
    });
  }

  onSubmit() {
    this.updateItem = this.updateForm.value;
    console.log(this.updateItem);
    this.updateForm.reset();
  }

}
