import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Operation Turkey Meats';

  constructor(public router: Router) { }

  public redirectDonate() {
	console.log('HERE');
	this.router.navigate(['/donate']);
  }
}
