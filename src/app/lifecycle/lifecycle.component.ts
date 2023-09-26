import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent {

  @Input() value!: string;
    constructor(){
      console.log('Constructor!!');     
    }
    ngOnInit(){
      console.log('NgOnInit!!');    
    }
    ngOnChanges(){
      console.log('NgOnChanges!!');
    }
    ngDoCheck() {
      console.log('NgDoCheck!!');
    }
    ngAfterViewInit(){
      console.log('NgAfterViewInit!!');
    }
    ngAfterViewChecked() {
      console.log('NgAfterViewChecked!!');    
    }
    ngOnDestroy(){
      console.log('NgOnDestroy!!');
    }
    ngAfterContentInit() {
      console.log('NgAfterContentInit!!');     
    }
    ngAfterContentChecked() {
      console.log('NgAfterContentChecked!!');  
    }

}
