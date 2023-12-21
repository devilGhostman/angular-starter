import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RouterOutlet, RouterLink, FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  username = '';
  password = '';

  handleOnclick() {
    this.username = '';
  }

  handleInput(event:any){
    this.password = event.target.value
  }
}
