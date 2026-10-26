import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { IniciComponent } from './inici/inici.component';
import { PersonatgeComponent } from './personatge/personatge.component';
import { HistoriaComponent } from './historia/historia.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  imports: [HeaderComponent, IniciComponent, PersonatgeComponent, HistoriaComponent, FooterComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class App {
  protected readonly title = signal('practica2');
  seccio = 'inici';
}
