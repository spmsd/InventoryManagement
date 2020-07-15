import { Injectable } from '@angular/core';
import { Inventory } from '../shared/inventory';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
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

 
  getSingleItem(id: string): Observable<Inventory> {
    let params1 = new HttpParams().set('id',id);
    console.log(baseURL + 'inventories/',{params:params1});
    return this.http.get<Inventory>(baseURL + 'inventories/',{params:params1});
    
    //return this.http.get<Inventory>(baseURL + 'inventories/?id='+id);

  }

  getCategoryList(cat_name: string): Observable<Inventory[]>{
    let params1 = new HttpParams().set('cat_name',cat_name);
    console.log(baseURL + 'inventories/',{params:params1});
    return this.http.get<Inventory[]>(baseURL + 'inventories/',{params:params1});
  }

  updatePutItem(item: Inventory): Observable<Inventory> {
    console.log("To update in service,:");
    console.log(item);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.put<Inventory>(baseURL + 'inventories/' + item.id, item, httpOptions);

  }

   addPostItem(item: Inventory): Observable<Inventory>{ 
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type':  'application/json' })
    };
    return this.http.post<Inventory>(baseURL + 'inventories/', item, httpOptions);
  }






}
