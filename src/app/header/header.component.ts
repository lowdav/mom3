import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

//Importer
//Routerlink för navigering mellan sidor utan omladdning
//Routerlinkactive för att kunna styla den aktiva länken
@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
