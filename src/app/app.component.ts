import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'Server joro', content: 'server was tested'}];


  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    console.log(serverData);
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(bluePrintServer) {
    console.log(bluePrintServer);
    this.serverElements.push({
      type: 'blueprint',
      name: bluePrintServer.serverName,
      content: bluePrintServer.serverContent
    });
  }
}
