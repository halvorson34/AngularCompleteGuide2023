import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment-two',
  templateUrl: './assignment-two.component.html',
  styleUrls: ['./assignment-two.component.css']
})
export class AssignmentTwoComponent {
userName = "";
clickable = false;

  resetUserName() {
    this.userName = "";
  }

  checkUserName() {
    if (this.userName != "") {
      this.clickable = true;
    } else {
      this.clickable = false;
    }
  }

  onUpdateUserName(event: any) {
    this.userName = event.target.value;
    this.checkUserName();
  }
}
