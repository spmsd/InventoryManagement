import { Injectable } from '@angular/core';
import { Inventory } from '../shared/inventory';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';


@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  //displaylist:Inventory[];
  //inventoriesList: Inventory[];

  constructor(private http: HttpClient) { 
  
  }

  getInventory(): Observable<Inventory[]>{
  	return this.http.get<Inventory[]>(baseURL + 'inventories');
  }

 
  getSingleItem(inv_id: string): Observable<Inventory> {
    let params1 = new HttpParams().set('inv_id',inv_id);
    console.log(baseURL + 'inventories/',{params:params1});
    return this.http.get<Inventory>(baseURL + 'inventories/',{params:params1});
    
    //return this.http.get<Inventory>(baseURL + 'inventories/?inv_id='+inv_id);

  }

  getCategoryList(cat_name: string): Observable<Inventory[]>{
    let params1 = new HttpParams().set('cat_name',cat_name);
    console.log(baseURL + 'inventories/',{params:params1});
    return this.http.get<Inventory[]>(baseURL + 'inventories/',{params:params1});
  }




}
