import { Routes } from '@angular/router';

import { EditComponent } from '../edit/edit.component'; // home
import { ItemdetailComponent } from '../itemdetail/itemdetail.component'; // full display
import { UpdateComponent } from '../update/update.component'; // to add products form


export const routes: Routes = [
  { path: 'home',  component: EditComponent },
  { path: 'display',     component: ItemdetailComponent },
  { path: 'update', component: UpdateComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

