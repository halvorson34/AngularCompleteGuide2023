import { Component } from '@angular/core';
import { timestamp } from 'rxjs';

@Component({
  selector: 'app-assignment-three',
  templateUrl: './assignment-three.component.html',
  styleUrls: ['./assignment-three.component.css']
})
export class AssignmentThreeComponent {
  displayParagraph = false;
  clickCounter = 0;
  buttonClicks = [];

  toggleParagraphDisplay() {
    if (this.displayParagraph == false) {
      this.displayParagraph = true;
    } else {
      this.displayParagraph = false;
    }
    this.clickCounter++;

    this.buttonClicks.push(this.buttonClicks.length + 1);
  }
}
