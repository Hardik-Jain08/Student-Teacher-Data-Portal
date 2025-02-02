import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isDashboard: boolean = false;
  isUserForm: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isDashboard = this.router.url === '/dashboard';
        this.isUserForm = this.router.url === '/new-user';
      }
    });
  }

  handleNavigation(route: string) {
    this.router.navigate([route]);
  }
}
