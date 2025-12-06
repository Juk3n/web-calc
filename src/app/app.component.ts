import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScreenComponent } from "./screen/screen.component";
import { KeysComponent } from "./keys/keys.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ScreenComponent, KeysComponent],
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
      this.text += input;
    }
  }

  clearCommand() {
    this.text = "";
  }

  sumEquation() {
    this.text = "sum";
  }
}
