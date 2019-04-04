import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  serverElements = [{type: 'server', name: 'Server joro', content: 'server was tested'}];

  constructor(){
    console.log('app constructor is executed');
  }

  ngOnInit() {
    console.log('ngOnInit app is executed');
  }
  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    //console.log(serverData);
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(bluePrintServer) {
    //console.log(bluePrintServer);
    this.serverElements.push({
      type: 'blueprint',
      name: bluePrintServer.serverName,
      content: bluePrintServer.serverContent
    });
  }


  onChangeFirst(){
    for(let server of this.serverElements){
      server.name = 'changed';
    }
  }

  onDestroy(){
    this.serverElements.splice(0, 1);
  }
}
