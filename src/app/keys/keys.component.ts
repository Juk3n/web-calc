import { Component } from '@angular/core';

@Component({
  selector: 'app-keys',
  imports: [],
  templateUrl: './keys.component.html',
  styleUrl: './keys.component.css'
})
export class KeysComponent {
  keys: Array<string> = [
    "1", "2", "3", "+",
    "4", "5", "6", "-",
    "7", "8", "9", "X",
    "0", "=", "/",
  ];
}
