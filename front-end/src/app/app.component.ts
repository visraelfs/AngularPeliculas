import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    setTimeout(() => {
      this.peliculas = [
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
    }, 3000);
  }

  title = 'El valor que yo quiera';

  peliculas;

  duplicarNumero(valor: number): number {
    return valor * 2;
  }
}