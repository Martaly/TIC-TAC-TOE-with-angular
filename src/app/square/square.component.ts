import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
  <button>{{value}}</button>
    <p>
 </p>
  `,
styles: ['button { width: 100%; height: 100%; font-size: 5em; background: #1A2441; border:1px solid #25335D ; border-radius:10px; color:##E7DACA!important; }'] })
export class SquareComponent {
@Input() value: "X" | "O";
}
