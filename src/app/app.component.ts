import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { PersonatgeComponent } from './personatge/personatge.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  imports: [HeaderComponent, PersonatgeComponent, FooterComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class App {
  protected readonly title = signal('practica2');
}
