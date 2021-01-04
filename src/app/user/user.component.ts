import { Component, OnInit } from '@angular/core';

import { UserService } from "../shared/user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService:UserService) { }
  submitted:boolean | undefined;
  formControls= this.userService.form.controls;
  successmesage:boolean | undefined;

  ngOnInit(): void {
  }


  onSubmit(){
    this.submitted=true;
    if (this.userService.form.valid){
          if(this.userService.form.get('$key').value == null)
            this.userService.insertUser(this.userService.form.value);
              else
                this.userService.updateUser(this.userService.form.value);
              this.successmesage=true;
              setTimeout(()=> this.successmesage=false,3000)
      this.submitted=false;
      this.userService.form.reset();
    }
   

  }
}
