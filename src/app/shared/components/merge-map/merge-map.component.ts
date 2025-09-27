import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { from, map, mergeMap, toArray } from 'rxjs';
import { Iuser } from '../../modules/user';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.scss']
})
export class MergeMapComponent implements OnInit {

  constructor(
    private User:UserService
  ) { }

  userInfoArr:any[]=[]
  postArr!:any[]

  ngOnInit(): void {
    // this.fecthAll()
    this.fetchUserandPosts()
  }

  // fecthAll(){
  //    this.User.getAllUsers().subscribe({
  //     next:(users:any)=>{
  //       console.log(users);
  //       users.forEach((user:any) => {
  //         console.log(user);
  //         this.User.getPost(user.id).subscribe({
  //           next:(posts:any)=>{
  //             console.log(posts);
  //             this.userInfoArr.push({
  //               ...user,
  //               postArr:posts
  //             })
              
  //           }
  //         })
          
  //       });
  //       // console.log(data);
       
        
  //     },error:err=>{
  //       console.log(err);
        
  //     }
  //   })
  // }

  fetchUserandPosts(){
    this.User.getAllUsers()
    .pipe(
      mergeMap(users=> from(users)),
      mergeMap((user:Iuser)=>{
      return  this.User.getPost(user.id) //after sub we will post
                    .pipe(
                      map((posts) =>{
                        return {
                          ...user,postArr:posts
                        }
                      })
                    )
                    
      }),
      toArray()
      
    )
   .subscribe((res:any)=>{
    this.userInfoArr=res
   }) //user with posts
    
  }

}
