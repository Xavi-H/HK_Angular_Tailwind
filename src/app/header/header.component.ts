import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Output() canviSeccio = new EventEmitter<string>(); // Per canviar de component al clicar els enllaços de navegació del menú
}
