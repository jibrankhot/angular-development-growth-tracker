import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.scss']
})
export class UserComponent {
  oldName = 'Jibran';
  newName = '';

  changeName(name: string) {
    this.oldName = this.newName || this.oldName;
    this.newName = name;
  }
}
