import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Inventory,CategotyName } from '../shared/inventory';

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

  constructor(private fb: FormBuilder) {
  	this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.updateForm = this.fb.group({
      inv_id: ['', Validators.required ],
	    cat_name: ['', Validators.required ],
	    prod_name: ['', Validators.required ],
	    image: '',
	    qty: ['', Validators.required ],
	    expr_date: ['', Validators.required ],
	    price: ['', Validators.required ],
	    seller: ['', Validators.required ]
    });
  }

  onSubmit() {
    this.updateItem = this.updateForm.value;
    console.log(this.updateItem);
    this.updateForm.reset({
      inv_id: '',
      cat_name: '',
      prod_name: '',
      image: '',
      qty: '',
      expr_date: '',
      price: '',
      seller: ''
    });
    this.updateFormDirective.resetForm();
  }

}
