import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { InventoryService } from './services/inventory.service';

import { AppComponent } from './app.component';

import 'hammerjs';
import { EditComponent } from './edit/edit.component';
import { ItemdetailComponent } from './itemdetail/itemdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    ItemdetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatListModule
  ],
  providers: [InventoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
