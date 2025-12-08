import { Component } from '@angular/core';
import { ScreenComponent } from "./screen/screen.component";
import { KeysComponent } from "./keys/keys.component";

@Component({
  selector: 'app-root',
  imports: [ScreenComponent, KeysComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'web-calc';
  text = "";

  onKeyPressed(input: string) {
    if (input == "C") {
      this.clearCommand();
    }
    else if (input == "=") {
      this.sumEquation();
    }
    else {
      if (input == "X") this.text += "*";
      else this.text += input;
    }
  }

  clearCommand() {
    this.text = "";
  }

  sumEquation() {
    try {
      this.text = new Function(`return ${this.text}`)();
    }
    catch (error) {
      this.text = "invalid operation!";
    }
  }
}
