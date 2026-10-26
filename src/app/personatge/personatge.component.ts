import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-personatge',
  templateUrl: './personatge.component.html',
})
export class PersonatgeComponent {
  protected readonly personatges = [
    {nom: 'Knight', descripcio: 'Cavaller silenciós que explora Hallownest i busca descobrir els secrets del regne.', img: '/assets/imgPersonatges/knight2.jpg'},
    {nom: 'Hornet', descripcio: 'Habilidosa protectora de les ruïnes de Hallownest. Empunya una agulla i fil.', img: '/assets/imgPersonatges/hornet2.png'},
    {nom: 'Quirrel', descripcio: 'Explorador que recorre Hallownest, atret pels seus misteris i la seva història.', img: '/assets/imgPersonatges/quirrel.jpg'},
    {nom: 'Rey Palido', descripcio: 'Antic rei de Hallownest que va fundar el regne i va intentar protegir-lo de la infecció.', img: '/assets/imgPersonatges/reyPalido.webp'},
    {nom: 'Dama Blanca', descripcio: 'Reina de Hallownest i mare dels Receptacles, que viu amagada després de la caiguda del regne.', img: '/assets/imgPersonatges/damaBlanca.webp'},
    {nom: 'Pure Vessel', descripcio: 'Receptacle escollit pel Rei Pàl·lid per contenir la Infecció i protegir Hallownest.', img: '/assets/imgPersonatges/pureVessel2.png'}
  ];
}
