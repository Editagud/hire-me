import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler/src/core';
import { Component , OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '@shield/data';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';



@Component({
  selector: 'shield-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  user: User[] = [];
  signupForm: FormGroup;
  constructor(private http: HttpClient, private formBuilder: FormBuilder,){
    this.fetch();
  }
  fetch(){
    this.http.get<User[]>('/api/users').subscribe((t)=> (this.user =t));
  }
  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      email: [null, [
        Validators.required,
        Validators.email,
        Validators.minLength(6)
      ]]


    })
  }
addUser(){

const formData = this.signupForm.value;
console.log(formData)
  this.http.post('/api/addUser', formData).subscribe(()=>{
    this.fetch();
  });
}
}
