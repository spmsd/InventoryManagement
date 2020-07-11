import { Routes } from '@angular/router';

import { EditComponent } from '../edit/edit.component'; // home
import { ItemdetailComponent } from '../itemdetail/itemdetail.component'; // full display
import { UpdateComponent } from '../update/update.component'; // to add products form
import { CategoryListComponent } from '../category-list/category-list.component'; // to display each category items

export const routes: Routes = [
  { path: 'home',  component: EditComponent },
  { path: 'itemdetail/:inv_id',     component: ItemdetailComponent },
  { path: 'update', component: UpdateComponent},
  { path: 'category-list/:cat_name',     component: CategoryListComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

