import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-info',
  template: `Name <input type="text" [(ngModel)]="name" (input)="nameChange.emit(name)"
  >`,
})
export class InfoComponent  {
  @Input() name;
  @Output() nameChange = new EventEmitter();;
}

@Component({
  selector: 'my-app',
  template: `<app-info [(name)]="name"></app-info>
  Result: {{name}}`,
})
export class AppComponent  {
   name = 'Gavin';
}