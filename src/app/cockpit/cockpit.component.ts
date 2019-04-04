import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  //newServerName = '';
  //newServerContent = '';
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() serverContentCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  @ViewChild('serverContent') serverContent: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  onAddServer(inputServer) {
    console.log(this.serverContent);
    this.serverCreated.emit({
      serverName: inputServer.value,
      serverContent: this.serverContent.nativeElement.value
    });
  }

  onAddBlueprint(inputServer) {
    this.serverContentCreated.emit({
      serverName: inputServer.value,
      serverContent: this.serverContent.nativeElement.value
    });
  }

}
