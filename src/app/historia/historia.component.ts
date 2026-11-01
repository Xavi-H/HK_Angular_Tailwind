import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-historia',
  templateUrl: './historia.component.html',
})
export class HistoriaComponent {
  // Controla si el bloque con spoilers está desplegado
  protected readonly mostraSpoilers = signal(false);

  protected toggleSpoilers(): void {
    this.mostraSpoilers.update(valor => !valor);
  }

  protected readonly historiaSenseSpoilers = [
    'Fa molt de temps, sota el petit poble de Dirtmouth, existia Hallownest, un regne pròsper d\'insectes que va florir a les profunditats de la terra. Governat per un rei misteriós, el Rei Pàl·lid, el regne va ser un lloc de ciutats, jardins i cavernes habitades per criatures de tota mena.',
    'Però la prosperitat no va durar. Una malaltia estranya, anomenada la Infecció, es va estendre pel regne i va consumir els seus habitants, convertint-los en ombres sense seny. Hallownest va quedar abandonat, en ruïnes i ple de perills.',
    'Un petit Cavaller silenciós arriba a Dirtmouth i decideix baixar al pou que condueix al regne caigut. Al llarg del viatge coneixerà personatges singulars, explorarà zones fascinants i s\'enfrontarà a enemics poderosos, mentre descobreix a poc a poc què va passar realment.'
  ];

  protected readonly historiaAmbSpoilers = [
    'Abans del Rei Pàl·lid, els insectes adoraven la Radiància, una deessa de la llum i els somnis. Quan el Rei Pàl·lid va arribar i va oferir als insectes ment i civilització pròpies, van deixar de venerar-la. La Radiància, sentint-se oblidada, va començar a infectar-los a través dels somnis.',
    'Per contenir la Infecció, el Rei Pàl·lid va crear els Vessels (recipients), éssers buits fets del Buit de l\'Abisme, amb la idea que poguessin tancar la Radiància dins seu. Cap no va ser prou pur, fins que va escollir el Cavaller Buit, que va ser segellat al Temple de l\'Ou Negre. Per reforçar el segell, tres Somiadors (Lurien, Monomon i Herrah) van acceptar dormir eternament.',
    'El pla va fallar perquè el Cavaller Buit no estava realment buit: tenia pensaments i, per tant, la Radiància va poder infectar-lo. El segell es va afeblir i la Infecció es va escampar de nou. El Cavaller que controles és un altre Vessel, germà del Cavaller Buit, i la seva missió és despertar els Somiadors per obrir l\'Ou Negre i enfrontar-se a la infecció.',
    'El joc té diversos finals segons les decisions del jugador, des de tornar a segellar la Infecció dins d\'un nou Vessel fins a trencar el cicle definitivament.'
  ];
}
