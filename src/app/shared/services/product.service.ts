import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  product_url:string=`https://fakestoreapi.com/products`;
  reviews_url:string=`https://jsonplaceholder.typicode.com`

  constructor(
    private _http:HttpClient
  ) { }

  fectchAllproducts():Observable<any>{
    return this._http.get(this.product_url)
  }

  fetchReviews(productId:number){
    return this._http.get(`${this.reviews_url}/users/${productId}/posts`)
  }
}
