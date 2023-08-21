import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment-three',
  templateUrl: './assignment-three.component.html',
  styleUrls: ['./assignment-three.component.css']
})
export class AssignmentThreeComponent {
  displayParagraph = false;
  buttonClicks = [];

  toggleParagraphDisplay() {
    if (this.displayParagraph == false) {
      this.displayParagraph = true;
    } else {
      this.displayParagraph = false;
    }

    //this.buttonClicks.push(this.buttonClicks.length + 1);
    this.buttonClicks.push(new Date());
  }
}
