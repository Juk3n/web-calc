import { Component, output } from '@angular/core';

@Component({
  selector: 'app-keys',
  imports: [],
  templateUrl: './keys.component.html',
  styleUrl: './keys.component.css'
})
export class KeysComponent {
  value = output<string>();
  keys: Array<string> = [
    "1", "2", "3", "+",
    "4", "5", "6", "-",
    "7", "8", "9", "X",
    "0", "=", "/",
  ];

  onKeyPressed(event: any) {
    console.log(event);
    this.value.emit(event);
  }
}
