import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-personatge',
  templateUrl: './personatge.component.html',
})
export class PersonatgeComponent {
  protected readonly personatges = [
    {nom: 'Knight', descripcio: 'x', img: '/src/assets/imgPersonatges/knight.webp'},
    {nom: 'Hornet', descripcio: 'x', img: '/src/assets/imgPersonatges/hornet.jpg'},
    {nom: 'Quirrel', descripcio: 'x', img: '/src/assets/imgPersonatges/quirrel.jpg'},
    {nom: 'Rey Palido', descripcio: 'x', img: '/src/assets/imgPersonatges/reyPalido.webp'},
    {nom: 'Dama Blanca', descripcio: 'x', img: '/src/assets/imgPersonatges/damaBlanca.webp'},
    {nom: 'Pure Vessel', descripcio: 'x', img: '/src/assets/imgPersonatges/pureVessel.jpg'}
  ];
}
