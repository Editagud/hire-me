import { Component, Input, OnInit } from '@angular/core';
import { User } from '@shield/data';

@Component({
  selector: 'shield-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user: User[];

  constructor() { }

  ngOnInit(): void {
  }

}
