import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  user = {
    id: 'Ashutosh123',
    name: 'Ashutosh Kumar',
    role: 'MEAN Stack Developer',
    email: 'ashutoshk043@gmail.com',
    phone: '+91-8887592130',
    profession: 'Full Stack Developer'
  };
}
