import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lifecycle-child',
  templateUrl: './lifecycle-child.component.html',
  styleUrls: ['./lifecycle-child.component.scss']
})
export class LifecycleChildComponent {
  @Input() value!: string;
  constructor(){
    console.log('child Constructor!!');     
  }
  ngOnInit(){
    console.log('child NgOnInit!!');    
  }
  ngOnChanges(){
    console.log('child NgOnChanges!!');
  }
  ngDoCheck() {
    console.log('child NgDoCheck!!');
  }
  ngAfterViewInit(){
    console.log('child NgAfterViewInit!!');
  }
  ngAfterViewChecked() {
    console.log('child NgAfterViewChecked!!');    
  }
  ngOnDestroy(){
    console.log('child NgOnDestroy!!');
  }
  ngAfterContentInit() {
    console.log('child NgAfterContentInit!!');     
  }
  ngAfterContentChecked() {
    console.log('child NgAfterContentChecked!!');  
  }
}
