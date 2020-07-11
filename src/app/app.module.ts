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
import { CategoryService } from './services/category.service';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material';

import { AppComponent } from './app.component';

import 'hammerjs';
import { EditComponent } from './edit/edit.component';
import { ItemdetailComponent } from './itemdetail/itemdetail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UpdateComponent } from './update/update.component';
import { CategoryListComponent } from './category-list/category-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    ItemdetailComponent,
    HeaderComponent,
    FooterComponent,
    UpdateComponent,
    CategoryListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatSlideToggleModule,
    AppRoutingModule,
    MatListModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [CategoryService,InventoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
