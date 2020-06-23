import { Component, OnInit } from '@angular/core';
import { LogRegService } from '../../services/log-reg.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  name: string = '';
  surname: string = '';
  email: string = '';
  password: string = '';


  constructor(private LogRegService: LogRegService ) { }

  ngOnInit(): void { }

    add_user () {
      console.log('user added');
      this.LogRegService.add_user(this.name, this.surname, this.email, this.password).subscribe(data => {
        console.log(data);
      });
    }

}
