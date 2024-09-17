import { Component, Input } from '@angular/core';

@Component({
  selector: 'bot-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
 
  @Input() parentData: string| undefined;
  sharedData: string| undefined;

  receiveNotification(data: string) {
    this.sharedData = data;
  }
}
