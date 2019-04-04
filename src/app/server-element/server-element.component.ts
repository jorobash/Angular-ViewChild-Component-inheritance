import { Component, Input, OnInit, OnChanges, SimpleChanges, DoCheck,
    AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy,
    ViewChild,ElementRef, ContentChild} from '@angular/core';



@Component({
    selector: 'app-server-element',
    templateUrl: './server-element.component.html',
    styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
    {
   @Input() element: {type: string, name: string, content: string };
   @Input() name: string;
    @ViewChild('heading') header : ElementRef;
    @ContentChild('paragraphReference') paragraph : ElementRef;
    constructor(){
    console.log('constructor is executed');
    }

    ngOnInit() {
        console.log('ngOnInit is executed');
        console.log(this.header.nativeElement.textContent);
    }

    ngOnChanges(changes: SimpleChanges){
        console.log('ngOnChanges is called');
        console.log(changes);
    }

    ngDoCheck(){
        console.log('ng do check');
    }

    ngAfterContentInit(){
        console.log('ng after content init called');
        console.log(this.paragraph.nativeElement.textContent);
    }

    ngAfterContentChecked(){
        console.log('afterContentChecked');
        console.log(this.header.nativeElement.textContent);
    }

    ngAfterViewInit(){
        console.log('ng after view init called');

    }

    ngAfterViewChecked(){
        console.log('after view Checked');
    }

    ngOnDestroy(){
        console.log('ng destroy called');
    }

}