import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { mergeMap } from 'rxjs';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.scss']
})
export class MergeComponent implements OnInit {
userI:any
postArr!:any[]
  constructor(
    private User:UserService
  ) { }

  ngOnInit(): void {
    

  }

  // fetchUserPosts(userId:any){
  //   console.log(userId);
  //   this.User.getUser(userId).subscribe({
  //     next:userInfo=>{
  //       this.userI=userInfo
  //       console.log(userInfo);
  //       // post id userInfo
  //       this.User.getPost(this.userI.id).subscribe({
  //         next:(post:any)=>{
  //           this.postArr=post
  //           console.log(post);
            
  //         },error:err=>{
  //           console.log(err);
            
  //         }
  //       })
  //     },error(err) {
  //       console.log(err);
        
  //     },
  //   })
  // }

  fetchUserPosts(userId:any){
    this.User.getUser(userId)
    .pipe(
     mergeMap((user)=>{
        this.userI=user
        return this.User.getPost(this.userI.id)
     })
    ).subscribe(res=>{
      this.postArr=res
    })
  }

}
