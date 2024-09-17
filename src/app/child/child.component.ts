import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'bot-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() childData: string | undefined;
  @Output() notifyParent: EventEmitter<string> = new EventEmitter<string>();

  sendDataToParent() {
    this.notifyParent.emit('Data from Child to Parent');
  }
}
