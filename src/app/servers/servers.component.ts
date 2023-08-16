import { Component } from '@angular/core';

@Component({
  //selector: 'app-servers', // selects by element
  //selector: '[app-servers]', // selects by attribute
  selector: '.app-servers', // selects by attribute
  template: '<app-server></app-server><app-server></app-server>', //inline template instead of templateUrl
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

}
