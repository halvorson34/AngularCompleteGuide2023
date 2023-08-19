import { Component } from '@angular/core';

@Component({
  selector: 'app-servers', // selects by element
  //selector: '[app-servers]', // selects by attribute
  //selector: '.app-servers', // selects by attribute
  //template: '<app-server></app-server><app-server></app-server>', //inline template instead of templateUrl
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = "No server was created";
  serverName = "";
  serverCreated = false;
  servers = ["Test Server", "Test Server 2"];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server was created! Server Name: " + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }
}
