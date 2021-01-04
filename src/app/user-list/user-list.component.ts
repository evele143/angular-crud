import { Component, OnInit } from '@angular/core';

import { UserService } from "../shared/user.service";



@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private userService: UserService) { }
  usersArray!: any[];
  showDelete:boolean | undefined;
  // searchText:string="";


  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      list =>{
        this.usersArray=list.map(item=>{
          return {
            $key:item.key,
            ...item.payload.val()
          }
        });
      }
    );
  }

  onDelete($key: any){
    if(confirm('are you sure you want to delete')){
      this.userService.deleteUser($key);
        this.showDelete=true;
        setTimeout(()=> this.showDelete=false,3000);
    }
  }

}
