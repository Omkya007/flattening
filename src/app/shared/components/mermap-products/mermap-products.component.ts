import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { map, mergeMap, toArray } from 'rxjs';

@Component({
  selector: 'app-mermap-products',
  templateUrl: './mermap-products.component.html',
  styleUrls: ['./mermap-products.component.scss']
})
export class MermapProductsComponent implements OnInit {

  productInfo:any[]=[];
  reviewsArr!:any[];
  constructor(
    private productSer:ProductService
  ) { }

  ngOnInit(): void {
    // this.getAllproducts()
    this.getProds()
  }

  // getAllproducts(){
  //   this.productSer.fectchAllproducts().subscribe({
  //     next:(products:any[])=>{
  //         console.log(products);
  //         products.forEach((p:any)=>{
  //           this.productSer.fetchReviews(p.id).subscribe({
  //             next:reviews=>{
  //               console.log(reviews);
  //               this.productInfo.push({
  //                 ...p,
  //                 reviewsArr:reviews
  //               })
  //             }
  //           })
  //         })
          
  //     },
  //     error:err=>{
  //       console.log(err);
        
  //     }
  //   })
  // }

  getProds(){
    this.productSer.fectchAllproducts() //array of prod
    .pipe(
      mergeMap(prod=> prod), //seperated each prod
      mergeMap((p:any)=> { //taking that prod we should call reveiw api call
        return this.productSer.fetchReviews(p.id)
        .pipe(
          map((products)=>{
            return{
              ...p,reviewsArr:products
            }
          })
        )
      }),
      toArray()
      
      
    ).subscribe(p=>{
   this.productInfo=p
      
    })
  }

}
