import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    setTimeout(() => {
      this.peliculasEnCines = [
        {
          titulo: 'Spiderman',
          fechaLanzamiento: new Date(),
          precio: 1400.99,
        },
        {
          titulo: 'Moana',
          fechaLanzamiento: new Date(),
          precio: 300.99,
        },
      ];

      this.peliculasProximosEstrenos = [
        {
          titulo: 'Avangers: Endgame',
          fechaLanzamiento: new Date(),
          precio: 1400.99,
        },
        {
          titulo: 'Inception',
          fechaLanzamiento: new Date(),
          precio: 300.99,
        },
        {
          titulo: 'Rocky',
          fechaLanzamiento: new Date(),
          precio: 300.99,
        },
      ];
    }, 3000);
  }
  title = 'El valor que yo quiera';

  peliculasEnCines;
  peliculasProximosEstrenos;

  duplicarNumero(valor: number): number {
    return valor * 2;
  }
}