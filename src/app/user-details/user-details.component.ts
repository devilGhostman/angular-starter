import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css',
})
export class UserDetailsComponent {
  constructor(private route: ActivatedRoute) {}
  userId: string | null = '';
  
  ngOnInit(): void {
    // snapshot is for once read it wont rerender even if id value change
    this.userId = this.route.snapshot.paramMap.get('id');

  }
}
