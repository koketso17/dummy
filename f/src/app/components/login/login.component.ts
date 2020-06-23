import { Component, OnInit } from '@angular/core';
import { LogRegService } from '../../services/log-reg.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';

  constructor(private LogRegService: LogRegService) { }

  ngOnInit(): void {

  }

  check_user() {

    console.log(this.email)
   
    this.LogRegService.check_user(this.email, this.password).subscribe(Response=>{
      console.log(Response);
    })
  }

  
  

}
