import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'S9L4';

  oggi = new Date().toString()

  totale = 20.45

  parola = "reversed"

}
