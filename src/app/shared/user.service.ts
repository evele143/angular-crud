import { Injectable } from '@angular/core';
import { FormControl,FormGroup,Validators } from "@angular/forms";
import { AngularFireDatabase,AngularFireList } from "angularfire2/database";
///login
// import { User } from '../login';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firebase:AngularFireDatabase) { }
  usersList!: AngularFireList<any>;


  form=new FormGroup({
    $key: new FormControl(null),
    fullName: new FormControl('',Validators.required),
    email:new FormControl('',Validators.email),
    mobile:new FormControl('',[Validators.required,Validators.minLength(8)]),
    location:new FormControl('')
  });


  getUsers() {
    this.usersList=this.firebase.list('users');
    return this.usersList.snapshotChanges();
  }

  insertUser(user: { fullName: any; email: any; mobile: any; location: any; }){
    this.usersList.push({
      fullName:user.fullName,
      email:user.email,
      mobile:user.mobile,
      location:user.location
    });
  }

  populateForm(user: { [key: string]: any; }){
    this.form.setValue(user)
  }

  updateUser(user: { $key: any; fullName: any; email: any; mobile: any; location: any; }){
    this.usersList.update(user.$key,
      {
        fullName:user.fullName,
        email:user.email,
        mobile:user.mobile,
        location:user.location
      }
      );
  }

  deleteUser($key:any){
    this.usersList.remove($key);
  }

  // //login
  // public login(userInfo: User){
  //   localStorage.setItem('ACCESS_TOKEN', "access_token");
  // }


  // public isLoggedIn(){
  //   return localStorage.getItem('ACCESS_TOKEN') !== null;


  // }


  // public logout(){
  //   localStorage.removeItem('ACCESS_TOKEN');
  // }

}
