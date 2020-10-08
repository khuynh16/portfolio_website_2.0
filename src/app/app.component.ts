import { Component } from '@angular/core';

import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio2';

  constructor(private router: Router) {
    // hide the 'landing-page' param in url when loading page
    this.router.events.subscribe(routerEvent => {
        if (routerEvent instanceof NavigationStart) {
            if (routerEvent.url === "/") {
                this.router.navigate(["landing-page"], {skipLocationChange: true})
            }
        }
    });
}
}
