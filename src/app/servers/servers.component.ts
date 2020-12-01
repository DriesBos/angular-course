import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.sass']
})
export class ServersComponent implements OnInit {
  allowNewServer = false
  serverCreationStatus = 'No server was created'
  serverName = ''
  username = ''
  serverCreated = false 
  servers = ['serverOne', 'serverTwo']

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000)
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true
    this.servers.push(this.serverName)
    this.serverCreationStatus = 'Server was created'
  }
  onUpdateServerName(event: Event) {
    // this.serverName = event.target.value
    this.serverName = (<HTMLTextAreaElement>event.target).value
  }
  onClickUsername() {
    this.username = ''
  }
}
